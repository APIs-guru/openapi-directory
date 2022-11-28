from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ActionsCancelWorkflowRunPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCancelWorkflowRunRequest:
    path_params: ActionsCancelWorkflowRunPathParams = field()
    

@dataclass
class ActionsCancelWorkflowRunResponse:
    content_type: str = field()
    status_code: int = field()
    actions_cancel_workflow_run_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
