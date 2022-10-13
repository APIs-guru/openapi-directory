from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsSetGithubActionsPermissionsRepositoryPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetGithubActionsPermissionsRepositoryRequestBody:
    allowed_actions: Optional[shared.AllowedActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_actions' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass
class ActionsSetGithubActionsPermissionsRepositoryRequest:
    path_params: ActionsSetGithubActionsPermissionsRepositoryPathParams = field(default=None)
    request: Optional[ActionsSetGithubActionsPermissionsRepositoryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetGithubActionsPermissionsRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
