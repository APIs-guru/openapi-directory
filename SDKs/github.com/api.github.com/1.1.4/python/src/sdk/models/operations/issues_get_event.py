from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssuesGetEventPathParams:
    event_id: int = field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesGetEventRequest:
    path_params: IssuesGetEventPathParams = field()
    

@dataclass
class IssuesGetEventResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue_event: Optional[shared.IssueEvent] = field(default=None)
    
