from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListWorkflowRunsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListWorkflowRunsQueryParams:
    actor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'actor', 'style': 'form', 'explode': True }})
    branch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'branch', 'style': 'form', 'explode': True }})
    event: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared.WorkflowRunStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListWorkflowRuns200ApplicationJSON:
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    workflow_runs: List[shared.WorkflowRun] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_runs') }})
    

@dataclass
class ActionsListWorkflowRunsRequest:
    path_params: ActionsListWorkflowRunsPathParams = field()
    query_params: ActionsListWorkflowRunsQueryParams = field()
    

@dataclass
class ActionsListWorkflowRunsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    actions_list_workflow_runs_200_application_json_object: Optional[ActionsListWorkflowRuns200ApplicationJSON] = field(default=None)
    
