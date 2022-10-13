from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetDiscussionCommentPathParams:
    comment_number: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionCommentHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class TeamsGetDiscussionCommentRequest:
    path_params: TeamsGetDiscussionCommentPathParams = field(default=None)
    headers: TeamsGetDiscussionCommentHeaders = field(default=None)
    

@dataclass
class TeamsGetDiscussionCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
