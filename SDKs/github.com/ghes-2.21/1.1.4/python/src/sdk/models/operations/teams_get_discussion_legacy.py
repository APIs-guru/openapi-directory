from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetDiscussionLegacyPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionLegacyRequest:
    path_params: TeamsGetDiscussionLegacyPathParams = field(default=None)
    

@dataclass
class TeamsGetDiscussionLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
