from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSellerStandardsProfilePathParams:
    cycle: str = field(metadata={'path_param': { 'field_name': 'cycle', 'style': 'simple', 'explode': False }})
    program: str = field(metadata={'path_param': { 'field_name': 'program', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSellerStandardsProfileSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSellerStandardsProfileRequest:
    path_params: GetSellerStandardsProfilePathParams = field()
    security: GetSellerStandardsProfileSecurity = field()
    

@dataclass
class GetSellerStandardsProfileResponse:
    content_type: str = field()
    status_code: int = field()
    standards_profile: Optional[shared.StandardsProfile] = field(default=None)
    
