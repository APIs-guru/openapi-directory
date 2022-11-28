from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetDiscussionInOrgPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionInOrgRequest:
    path_params: TeamsGetDiscussionInOrgPathParams = field()
    

@dataclass
class TeamsGetDiscussionInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
