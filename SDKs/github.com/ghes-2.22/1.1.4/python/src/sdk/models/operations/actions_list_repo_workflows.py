from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListRepoWorkflowsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListRepoWorkflowsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListRepoWorkflows200ApplicationJSON:
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    workflows: List[shared.Workflow] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflows') }})
    

@dataclass
class ActionsListRepoWorkflowsRequest:
    path_params: ActionsListRepoWorkflowsPathParams = field()
    query_params: ActionsListRepoWorkflowsQueryParams = field()
    

@dataclass
class ActionsListRepoWorkflowsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    actions_list_repo_workflows_200_application_json_object: Optional[ActionsListRepoWorkflows200ApplicationJSON] = field(default=None)
    
