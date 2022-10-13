from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListJobsForWorkflowRunPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    
class ActionsListJobsForWorkflowRunFilterEnum(str, Enum):
    LATEST = "latest"
    ALL = "all"


@dataclass
class ActionsListJobsForWorkflowRunQueryParams:
    filter: Optional[ActionsListJobsForWorkflowRunFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListJobsForWorkflowRunRequest:
    path_params: ActionsListJobsForWorkflowRunPathParams = field(default=None)
    query_params: ActionsListJobsForWorkflowRunQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListJobsForWorkflowRun200ApplicationJSON:
    jobs: List[shared.Job] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListJobsForWorkflowRunResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_jobs_for_workflow_run_200_application_json_object: Optional[ActionsListJobsForWorkflowRun200ApplicationJSON] = field(default=None)
    
