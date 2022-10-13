from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListRepoWorkflowsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListRepoWorkflowsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListRepoWorkflowsRequest:
    path_params: ActionsListRepoWorkflowsPathParams = field(default=None)
    query_params: ActionsListRepoWorkflowsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListRepoWorkflows200ApplicationJSON:
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    workflows: List[shared.Workflow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflows' }})
    

@dataclass
class ActionsListRepoWorkflowsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_repo_workflows_200_application_json_object: Optional[ActionsListRepoWorkflows200ApplicationJSON] = field(default=None)
    
