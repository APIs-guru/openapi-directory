from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ActionsGetWorkflowPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(default=None, metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetWorkflowRequest:
    path_params: ActionsGetWorkflowPathParams = field(default=None)
    

@dataclass
class ActionsGetWorkflowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    workflow: Optional[shared.Workflow] = field(default=None)
    
