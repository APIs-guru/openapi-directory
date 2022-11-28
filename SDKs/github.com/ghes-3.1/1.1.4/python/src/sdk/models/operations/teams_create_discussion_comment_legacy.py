from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCreateDiscussionCommentLegacyPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateDiscussionCommentLegacyRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class TeamsCreateDiscussionCommentLegacyRequest:
    path_params: TeamsCreateDiscussionCommentLegacyPathParams = field()
    request: Optional[TeamsCreateDiscussionCommentLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateDiscussionCommentLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
