from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetWorkflowRunPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetWorkflowRunRequest:
    path_params: ActionsGetWorkflowRunPathParams = field(default=None)
    

@dataclass
class ActionsGetWorkflowRunResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    workflow_run: Optional[shared.WorkflowRun] = field(default=None)
    
