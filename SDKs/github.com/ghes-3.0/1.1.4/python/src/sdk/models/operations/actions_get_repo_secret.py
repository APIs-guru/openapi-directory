from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetRepoSecretPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetRepoSecretRequest:
    path_params: ActionsGetRepoSecretPathParams = field(default=None)
    

@dataclass
class ActionsGetRepoSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_secret: Optional[shared.ActionsSecret] = field(default=None)
    
