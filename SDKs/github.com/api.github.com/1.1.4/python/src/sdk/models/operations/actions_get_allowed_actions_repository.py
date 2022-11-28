from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetAllowedActionsRepositoryPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetAllowedActionsRepositoryRequest:
    path_params: ActionsGetAllowedActionsRepositoryPathParams = field()
    

@dataclass
class ActionsGetAllowedActionsRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    selected_actions: Optional[shared.SelectedActions] = field(default=None)
    
