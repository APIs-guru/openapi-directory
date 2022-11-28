from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReactionsListForTeamDiscussionCommentInOrgPathParams:
    comment_number: int = field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class ReactionsListForTeamDiscussionCommentInOrgContentEnum(str, Enum):
    PLUS_1 = "+1"
    MINUS_1 = "-1"
    LAUGH = "laugh"
    CONFUSED = "confused"
    HEART = "heart"
    HOORAY = "hooray"
    ROCKET = "rocket"
    EYES = "eyes"


@dataclass
class ReactionsListForTeamDiscussionCommentInOrgQueryParams:
    content: Optional[ReactionsListForTeamDiscussionCommentInOrgContentEnum] = field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReactionsListForTeamDiscussionCommentInOrgRequest:
    path_params: ReactionsListForTeamDiscussionCommentInOrgPathParams = field()
    query_params: ReactionsListForTeamDiscussionCommentInOrgQueryParams = field()
    

@dataclass
class ReactionsListForTeamDiscussionCommentInOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    reactions: Optional[List[shared.Reaction]] = field(default=None)
    
