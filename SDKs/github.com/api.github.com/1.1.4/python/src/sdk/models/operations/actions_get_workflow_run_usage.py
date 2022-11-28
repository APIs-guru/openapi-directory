from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetWorkflowRunUsagePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetWorkflowRunUsageRequest:
    path_params: ActionsGetWorkflowRunUsagePathParams = field()
    

@dataclass
class ActionsGetWorkflowRunUsageResponse:
    content_type: str = field()
    status_code: int = field()
    workflow_run_usage: Optional[shared.WorkflowRunUsage] = field(default=None)
    
