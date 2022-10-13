from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ResolveInvitationTokenQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class ResolveInvitationTokenSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResolveInvitationTokenRequest:
    query_params: ResolveInvitationTokenQueryParams = field(default=None)
    security: ResolveInvitationTokenSecurity = field(default=None)
    

@dataclass
class ResolveInvitationTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
