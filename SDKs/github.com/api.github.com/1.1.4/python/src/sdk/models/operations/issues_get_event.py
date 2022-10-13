from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssuesGetEventPathParams:
    event_id: int = field(default=None, metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesGetEventRequest:
    path_params: IssuesGetEventPathParams = field(default=None)
    

@dataclass
class IssuesGetEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue_event: Optional[shared.IssueEvent] = field(default=None)
    
