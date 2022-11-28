from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetDiscussionCommentPathParams:
    comment_number: int = field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionCommentHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionCommentRequest:
    headers: TeamsGetDiscussionCommentHeaders = field()
    path_params: TeamsGetDiscussionCommentPathParams = field()
    

@dataclass
class TeamsGetDiscussionCommentResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
