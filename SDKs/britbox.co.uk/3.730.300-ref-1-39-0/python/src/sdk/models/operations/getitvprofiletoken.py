from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItvProfileTokenQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItvProfileTokenSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItvProfileTokenRequest:
    query_params: GetItvProfileTokenQueryParams = field(default=None)
    request: shared.ItvProfileTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetItvProfileTokenSecurity = field(default=None)
    

@dataclass
class GetItvProfileTokenResponse:
    content_type: str = field(default=None)
    itv_profile_token: Optional[shared.ItvProfileToken] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
