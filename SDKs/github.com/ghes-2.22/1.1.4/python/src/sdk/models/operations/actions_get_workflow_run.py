from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetWorkflowRunPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetWorkflowRunRequest:
    path_params: ActionsGetWorkflowRunPathParams = field()
    

@dataclass
class ActionsGetWorkflowRunResponse:
    content_type: str = field()
    status_code: int = field()
    workflow_run: Optional[shared.WorkflowRun] = field(default=None)
    
