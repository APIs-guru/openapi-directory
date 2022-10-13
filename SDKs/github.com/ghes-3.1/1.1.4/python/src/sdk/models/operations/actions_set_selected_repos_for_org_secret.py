from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsSetSelectedReposForOrgSecretPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetSelectedReposForOrgSecretRequestBody:
    selected_repository_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repository_ids' }})
    

@dataclass
class ActionsSetSelectedReposForOrgSecretRequest:
    path_params: ActionsSetSelectedReposForOrgSecretPathParams = field(default=None)
    request: Optional[ActionsSetSelectedReposForOrgSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetSelectedReposForOrgSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
