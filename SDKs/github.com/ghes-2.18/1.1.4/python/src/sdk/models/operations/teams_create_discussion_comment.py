from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCreateDiscussionCommentPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCreateDiscussionCommentHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass_json
@dataclass
class TeamsCreateDiscussionCommentRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

@dataclass
class TeamsCreateDiscussionCommentRequest:
    path_params: TeamsCreateDiscussionCommentPathParams = field(default=None)
    headers: TeamsCreateDiscussionCommentHeaders = field(default=None)
    request: Optional[TeamsCreateDiscussionCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateDiscussionCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
