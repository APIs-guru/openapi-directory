from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListJobsForWorkflowRunPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    
class ActionsListJobsForWorkflowRunFilterEnum(str, Enum):
    LATEST = "latest"
    ALL = "all"


@dataclass
class ActionsListJobsForWorkflowRunQueryParams:
    filter: Optional[ActionsListJobsForWorkflowRunFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListJobsForWorkflowRun200ApplicationJSON:
    jobs: List[shared.Job] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class ActionsListJobsForWorkflowRunRequest:
    path_params: ActionsListJobsForWorkflowRunPathParams = field()
    query_params: ActionsListJobsForWorkflowRunQueryParams = field()
    

@dataclass
class ActionsListJobsForWorkflowRunResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    actions_list_jobs_for_workflow_run_200_application_json_object: Optional[ActionsListJobsForWorkflowRun200ApplicationJSON] = field(default=None)
    
