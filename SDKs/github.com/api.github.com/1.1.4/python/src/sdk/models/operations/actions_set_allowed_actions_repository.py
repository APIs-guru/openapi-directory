from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsSetAllowedActionsRepositoryPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsSetAllowedActionsRepositoryRequest:
    path_params: ActionsSetAllowedActionsRepositoryPathParams = field()
    request: Optional[shared.SelectedActions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetAllowedActionsRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    
