from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetJobForWorkflowRunPathParams:
    job_id: int = field(metadata={'path_param': { 'field_name': 'job_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetJobForWorkflowRunRequest:
    path_params: ActionsGetJobForWorkflowRunPathParams = field()
    

@dataclass
class ActionsGetJobForWorkflowRunResponse:
    content_type: str = field()
    status_code: int = field()
    job: Optional[shared.Job] = field(default=None)
    
