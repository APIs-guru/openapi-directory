from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ActionsGetWorkflowUsagePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = field(default=None, metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetWorkflowUsageRequest:
    path_params: ActionsGetWorkflowUsagePathParams = field(default=None)
    

@dataclass
class ActionsGetWorkflowUsageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    workflow_usage: Optional[shared.WorkflowUsage] = field(default=None)
    
