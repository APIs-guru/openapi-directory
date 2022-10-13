from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAuthorizationCodeIDQueryParams:
    code_challenge: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Code_challenge', 'style': 'form', 'explode': True }})
    code_challenge_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Code_challenge_method', 'style': 'form', 'explode': True }})
    verified_mobile: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Verified_mobile', 'style': 'form', 'explode': True }})
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    dl_flow: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dl_flow', 'style': 'form', 'explode': True }})
    redirect_uri: str = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    response_type: str = field(default=None, metadata={'query_param': { 'field_name': 'response_type', 'style': 'form', 'explode': True }})
    state: str = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuthorizationCodeIDSecurity:
    oauth_authorize_code: shared.SchemeOauthAuthorizeCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAuthorizationCodeIDRequest:
    query_params: GetAuthorizationCodeIDQueryParams = field(default=None)
    security: GetAuthorizationCodeIDSecurity = field(default=None)
    

@dataclass
class GetAuthorizationCodeIDResponse:
    content_type: str = field(default=None)
    sample: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
