from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetRepoSecretPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetRepoSecretRequest:
    path_params: ActionsGetRepoSecretPathParams = field()
    

@dataclass
class ActionsGetRepoSecretResponse:
    content_type: str = field()
    status_code: int = field()
    actions_secret: Optional[shared.ActionsSecret] = field(default=None)
    
