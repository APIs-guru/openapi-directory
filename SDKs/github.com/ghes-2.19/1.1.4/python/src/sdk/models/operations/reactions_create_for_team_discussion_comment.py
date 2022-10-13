from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReactionsCreateForTeamDiscussionCommentPathParams:
    comment_number: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsCreateForTeamDiscussionCommentHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    
class ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum(str, Enum):
    PLUS_1 = "+1"
    MINUS_1 = "-1"
    LAUGH = "laugh"
    CONFUSED = "confused"
    HEART = "heart"
    HOORAY = "hooray"
    ROCKET = "rocket"
    EYES = "eyes"


@dataclass_json
@dataclass
class ReactionsCreateForTeamDiscussionCommentRequestBody:
    content: ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionCommentRequest:
    path_params: ReactionsCreateForTeamDiscussionCommentPathParams = field(default=None)
    headers: ReactionsCreateForTeamDiscussionCommentHeaders = field(default=None)
    request: Optional[ReactionsCreateForTeamDiscussionCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reaction: Optional[shared.Reaction] = field(default=None)
    
