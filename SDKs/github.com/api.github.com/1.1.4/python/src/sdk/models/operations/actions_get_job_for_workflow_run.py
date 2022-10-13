from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetJobForWorkflowRunPathParams:
    job_id: int = field(default=None, metadata={'path_param': { 'field_name': 'job_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetJobForWorkflowRunRequest:
    path_params: ActionsGetJobForWorkflowRunPathParams = field(default=None)
    

@dataclass
class ActionsGetJobForWorkflowRunResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    job: Optional[shared.Job] = field(default=None)
    
