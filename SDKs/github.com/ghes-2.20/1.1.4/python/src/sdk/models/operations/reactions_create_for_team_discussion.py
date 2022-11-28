from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReactionsCreateForTeamDiscussionPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsCreateForTeamDiscussionHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    
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
    content: ReactionsCreateForTeamDiscussionRequestBodyContentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass
class ReactionsCreateForTeamDiscussionRequest:
    headers: ReactionsCreateForTeamDiscussionHeaders = field()
    path_params: ReactionsCreateForTeamDiscussionPathParams = field()
    request: Optional[ReactionsCreateForTeamDiscussionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionResponse:
    content_type: str = field()
    status_code: int = field()
    reaction: Optional[shared.Reaction] = field(default=None)
    
