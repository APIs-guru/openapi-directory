from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsUpdateDiscussionCommentLegacyPathParams:
    comment_number: int = field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsUpdateDiscussionCommentLegacyRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class TeamsUpdateDiscussionCommentLegacyRequest:
    path_params: TeamsUpdateDiscussionCommentLegacyPathParams = field()
    request: Optional[TeamsUpdateDiscussionCommentLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateDiscussionCommentLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
