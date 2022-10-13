from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class RefreshTokenQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class RefreshTokenRequest:
    query_params: RefreshTokenQueryParams = field(default=None)
    request: shared.TokenRefreshRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RefreshTokenResponse:
    access_token: Optional[shared.AccessToken] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
