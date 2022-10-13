from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ActionsReRunWorkflowPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsReRunWorkflowRequest:
    path_params: ActionsReRunWorkflowPathParams = field(default=None)
    

@dataclass
class ActionsReRunWorkflowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_re_run_workflow_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
