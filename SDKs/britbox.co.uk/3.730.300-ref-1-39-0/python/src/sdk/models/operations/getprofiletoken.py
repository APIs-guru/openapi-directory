from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetProfileTokenQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileTokenSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileTokenRequest:
    query_params: GetProfileTokenQueryParams = field(default=None)
    request: shared.ProfileTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetProfileTokenSecurity = field(default=None)
    

@dataclass
class GetProfileTokenResponse:
    access_tokens: Optional[List[shared.AccessToken]] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
