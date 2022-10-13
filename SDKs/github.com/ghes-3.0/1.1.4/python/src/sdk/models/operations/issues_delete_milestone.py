from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssuesDeleteMilestonePathParams:
    milestone_number: int = field(default=None, metadata={'path_param': { 'field_name': 'milestone_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesDeleteMilestoneRequest:
    path_params: IssuesDeleteMilestonePathParams = field(default=None)
    

@dataclass
class IssuesDeleteMilestoneResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
