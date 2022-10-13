from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReactionsCreateForTeamDiscussionPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsCreateForTeamDiscussionHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    
class ReactionsCreateForTeamDiscussionRequestBodyContentEnum(str, Enum):
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
class ReactionsCreateForTeamDiscussionRequestBody:
    content: ReactionsCreateForTeamDiscussionRequestBodyContentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionRequest:
    path_params: ReactionsCreateForTeamDiscussionPathParams = field(default=None)
    headers: ReactionsCreateForTeamDiscussionHeaders = field(default=None)
    request: Optional[ReactionsCreateForTeamDiscussionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reaction: Optional[shared.Reaction] = field(default=None)
    
