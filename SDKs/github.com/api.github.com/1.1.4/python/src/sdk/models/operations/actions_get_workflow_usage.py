from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ActionsGetWorkflowUsagePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetWorkflowUsageRequest:
    path_params: ActionsGetWorkflowUsagePathParams = field()
    

@dataclass
class ActionsGetWorkflowUsageResponse:
    content_type: str = field()
    status_code: int = field()
    workflow_usage: Optional[shared.WorkflowUsage] = field(default=None)
    
