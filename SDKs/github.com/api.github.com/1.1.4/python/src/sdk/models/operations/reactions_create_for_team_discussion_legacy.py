from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReactionsCreateForTeamDiscussionLegacyPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum(str, Enum):
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
class ReactionsCreateForTeamDiscussionLegacyRequestBody:
    content: ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionLegacyRequest:
    path_params: ReactionsCreateForTeamDiscussionLegacyPathParams = field(default=None)
    request: Optional[ReactionsCreateForTeamDiscussionLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reaction: Optional[shared.Reaction] = field(default=None)
    
