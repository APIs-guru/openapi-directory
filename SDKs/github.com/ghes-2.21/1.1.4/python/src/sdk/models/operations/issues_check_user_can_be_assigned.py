from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssuesCheckUserCanBeAssignedPathParams:
    assignee: str = field(default=None, metadata={'path_param': { 'field_name': 'assignee', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesCheckUserCanBeAssignedRequest:
    path_params: IssuesCheckUserCanBeAssignedPathParams = field(default=None)
    

@dataclass
class IssuesCheckUserCanBeAssignedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
