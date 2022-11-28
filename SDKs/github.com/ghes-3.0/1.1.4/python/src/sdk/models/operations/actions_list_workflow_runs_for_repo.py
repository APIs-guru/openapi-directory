from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListWorkflowRunsForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListWorkflowRunsForRepoQueryParams:
    actor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'actor', 'style': 'form', 'explode': True }})
    branch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'branch', 'style': 'form', 'explode': True }})
    event: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared.WorkflowRunStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListWorkflowRunsForRepo200ApplicationJSON:
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    workflow_runs: List[shared.WorkflowRun] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_runs') }})
    

@dataclass
class ActionsListWorkflowRunsForRepoRequest:
    path_params: ActionsListWorkflowRunsForRepoPathParams = field()
    query_params: ActionsListWorkflowRunsForRepoQueryParams = field()
    

@dataclass
class ActionsListWorkflowRunsForRepoResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    actions_list_workflow_runs_for_repo_200_application_json_object: Optional[ActionsListWorkflowRunsForRepo200ApplicationJSON] = field(default=None)
    
