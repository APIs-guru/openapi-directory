from dataclasses import dataclass, field
from typing import Any


@dataclass
class ActionsEnableWorkflowPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsEnableWorkflowRequest:
    path_params: ActionsEnableWorkflowPathParams = field()
    

@dataclass
class ActionsEnableWorkflowResponse:
    content_type: str = field()
    status_code: int = field()
    
