from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsSetGithubActionsPermissionsRepositoryPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetGithubActionsPermissionsRepositoryRequestBody:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    allowed_actions: Optional[shared.AllowedActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    

@dataclass
class ActionsSetGithubActionsPermissionsRepositoryRequest:
    path_params: ActionsSetGithubActionsPermissionsRepositoryPathParams = field()
    request: Optional[ActionsSetGithubActionsPermissionsRepositoryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetGithubActionsPermissionsRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    
