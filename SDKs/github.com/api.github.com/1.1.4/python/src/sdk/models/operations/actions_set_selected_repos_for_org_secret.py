from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsSetSelectedReposForOrgSecretPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetSelectedReposForOrgSecretRequestBody:
    selected_repository_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    

@dataclass
class ActionsSetSelectedReposForOrgSecretRequest:
    path_params: ActionsSetSelectedReposForOrgSecretPathParams = field()
    request: Optional[ActionsSetSelectedReposForOrgSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetSelectedReposForOrgSecretResponse:
    content_type: str = field()
    status_code: int = field()
    
