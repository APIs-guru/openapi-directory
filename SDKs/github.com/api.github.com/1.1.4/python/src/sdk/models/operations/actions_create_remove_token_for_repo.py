from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsCreateRemoveTokenForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCreateRemoveTokenForRepoRequest:
    path_params: ActionsCreateRemoveTokenForRepoPathParams = field(default=None)
    

@dataclass
class ActionsCreateRemoveTokenForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
