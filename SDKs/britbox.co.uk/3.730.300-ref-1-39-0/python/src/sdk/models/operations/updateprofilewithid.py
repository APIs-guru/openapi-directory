from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class UpdateProfileWithIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProfileWithIDQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateProfileWithIDSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateProfileWithIDRequest:
    path_params: UpdateProfileWithIDPathParams = field(default=None)
    query_params: UpdateProfileWithIDQueryParams = field(default=None)
    request: shared.ProfileUpdateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateProfileWithIDSecurity = field(default=None)
    

@dataclass
class UpdateProfileWithIDResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
