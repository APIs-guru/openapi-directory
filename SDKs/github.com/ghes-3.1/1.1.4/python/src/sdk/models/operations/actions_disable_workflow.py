from dataclasses import dataclass, field
from typing import Any


@dataclass
class ActionsDisableWorkflowPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(default=None, metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDisableWorkflowRequest:
    path_params: ActionsDisableWorkflowPathParams = field(default=None)
    

@dataclass
class ActionsDisableWorkflowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
