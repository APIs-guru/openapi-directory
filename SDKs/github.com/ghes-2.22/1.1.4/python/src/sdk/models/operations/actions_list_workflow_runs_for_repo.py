from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListWorkflowRunsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListWorkflowRunsForRepoQueryParams:
    actor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'actor', 'style': 'form', 'explode': True }})
    branch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'branch', 'style': 'form', 'explode': True }})
    event: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared.WorkflowRunStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListWorkflowRunsForRepoRequest:
    path_params: ActionsListWorkflowRunsForRepoPathParams = field(default=None)
    query_params: ActionsListWorkflowRunsForRepoQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListWorkflowRunsForRepo200ApplicationJSON:
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    workflow_runs: List[shared.WorkflowRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflow_runs' }})
    

@dataclass
class ActionsListWorkflowRunsForRepoResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_workflow_runs_for_repo_200_application_json_object: Optional[ActionsListWorkflowRunsForRepo200ApplicationJSON] = field(default=None)
    
