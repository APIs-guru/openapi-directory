from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSellerStandardsProfilePathParams:
    cycle: str = field(default=None, metadata={'path_param': { 'field_name': 'cycle', 'style': 'simple', 'explode': False }})
    program: str = field(default=None, metadata={'path_param': { 'field_name': 'program', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSellerStandardsProfileSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSellerStandardsProfileRequest:
    path_params: GetSellerStandardsProfilePathParams = field(default=None)
    security: GetSellerStandardsProfileSecurity = field(default=None)
    

@dataclass
class GetSellerStandardsProfileResponse:
    content_type: str = field(default=None)
    standards_profile: Optional[shared.StandardsProfile] = field(default=None)
    status_code: int = field(default=None)
    
