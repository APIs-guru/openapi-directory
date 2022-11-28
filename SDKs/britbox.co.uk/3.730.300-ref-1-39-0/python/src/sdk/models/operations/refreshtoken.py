from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RefreshTokenQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class RefreshTokenRequest:
    query_params: RefreshTokenQueryParams = field()
    request: shared.TokenRefreshRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RefreshTokenResponse:
    content_type: str = field()
    status_code: int = field()
    access_token: Optional[shared.AccessToken] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
