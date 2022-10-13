from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReactionsCreateForTeamDiscussionCommentInOrgPathParams:
    comment_number: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum(str, Enum):
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
class ReactionsCreateForTeamDiscussionCommentInOrgRequestBody:
    content: ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionCommentInOrgRequest:
    path_params: ReactionsCreateForTeamDiscussionCommentInOrgPathParams = field(default=None)
    request: Optional[ReactionsCreateForTeamDiscussionCommentInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionCommentInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reaction: Optional[shared.Reaction] = field(default=None)
    
