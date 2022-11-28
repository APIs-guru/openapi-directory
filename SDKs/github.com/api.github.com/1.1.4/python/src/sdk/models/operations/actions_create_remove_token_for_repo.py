from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsCreateRemoveTokenForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCreateRemoveTokenForRepoRequest:
    path_params: ActionsCreateRemoveTokenForRepoPathParams = field()
    

@dataclass
class ActionsCreateRemoveTokenForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
