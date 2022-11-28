from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetDiscussionLegacyPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionLegacyRequest:
    path_params: TeamsGetDiscussionLegacyPathParams = field()
    

@dataclass
class TeamsGetDiscussionLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
