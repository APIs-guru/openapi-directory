from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProfileQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileRequest:
    query_params: GetProfileQueryParams = field()
    security: GetProfileSecurity = field()
    

@dataclass
class GetProfileResponse:
    content_type: str = field()
    status_code: int = field()
    profile_detail: Optional[shared.ProfileDetail] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
