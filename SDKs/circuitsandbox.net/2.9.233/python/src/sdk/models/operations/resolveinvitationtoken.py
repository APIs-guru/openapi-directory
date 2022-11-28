from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResolveInvitationTokenQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class ResolveInvitationTokenSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResolveInvitationTokenRequest:
    query_params: ResolveInvitationTokenQueryParams = field()
    security: ResolveInvitationTokenSecurity = field()
    

@dataclass
class ResolveInvitationTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
