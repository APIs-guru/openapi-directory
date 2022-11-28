from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ActionsGetWorkflowPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetWorkflowRequest:
    path_params: ActionsGetWorkflowPathParams = field()
    

@dataclass
class ActionsGetWorkflowResponse:
    content_type: str = field()
    status_code: int = field()
    workflow: Optional[shared.Workflow] = field(default=None)
    
