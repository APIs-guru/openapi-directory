from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCreateDiscussionCommentPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCreateDiscussionCommentHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateDiscussionCommentRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class TeamsCreateDiscussionCommentRequest:
    headers: TeamsCreateDiscussionCommentHeaders = field()
    path_params: TeamsCreateDiscussionCommentPathParams = field()
    request: Optional[TeamsCreateDiscussionCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateDiscussionCommentResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
