from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListWorkflowRunsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(default=None, metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListWorkflowRunsQueryParams:
    actor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'actor', 'style': 'form', 'explode': True }})
    branch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'branch', 'style': 'form', 'explode': True }})
    event: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared.WorkflowRunStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListWorkflowRunsRequest:
    path_params: ActionsListWorkflowRunsPathParams = field(default=None)
    query_params: ActionsListWorkflowRunsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListWorkflowRuns200ApplicationJSON:
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    workflow_runs: List[shared.WorkflowRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflow_runs' }})
    

@dataclass
class ActionsListWorkflowRunsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_workflow_runs_200_application_json_object: Optional[ActionsListWorkflowRuns200ApplicationJSON] = field(default=None)
    
