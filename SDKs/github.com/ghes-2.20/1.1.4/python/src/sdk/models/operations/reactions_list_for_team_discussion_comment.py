from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReactionsListForTeamDiscussionCommentPathParams:
    comment_number: int = field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class ReactionsListForTeamDiscussionCommentContentEnum(str, Enum):
    PLUS_1 = "+1"
    MINUS_1 = "-1"
    LAUGH = "laugh"
    CONFUSED = "confused"
    HEART = "heart"
    HOORAY = "hooray"
    ROCKET = "rocket"
    EYES = "eyes"


@dataclass
class ReactionsListForTeamDiscussionCommentQueryParams:
    content: Optional[ReactionsListForTeamDiscussionCommentContentEnum] = field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReactionsListForTeamDiscussionCommentHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsListForTeamDiscussionCommentRequest:
    headers: ReactionsListForTeamDiscussionCommentHeaders = field()
    path_params: ReactionsListForTeamDiscussionCommentPathParams = field()
    query_params: ReactionsListForTeamDiscussionCommentQueryParams = field()
    

@dataclass
class ReactionsListForTeamDiscussionCommentResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    reactions: Optional[List[shared.Reaction]] = field(default=None)
    
