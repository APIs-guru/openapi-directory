from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetDiscussionPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionRequest:
    headers: TeamsGetDiscussionHeaders = field()
    path_params: TeamsGetDiscussionPathParams = field()
    

@dataclass
class TeamsGetDiscussionResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
