from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CreateProfileQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProfileSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProfileRequest:
    query_params: CreateProfileQueryParams = field(default=None)
    request: shared.ProfileCreationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProfileSecurity = field(default=None)
    

@dataclass
class CreateProfileResponse:
    content_type: str = field(default=None)
    profile_detail: Optional[shared.ProfileDetail] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
