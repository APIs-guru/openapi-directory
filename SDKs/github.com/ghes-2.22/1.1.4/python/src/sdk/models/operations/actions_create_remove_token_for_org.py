from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsCreateRemoveTokenForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCreateRemoveTokenForOrgRequest:
    path_params: ActionsCreateRemoveTokenForOrgPathParams = field(default=None)
    

@dataclass
class ActionsCreateRemoveTokenForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
