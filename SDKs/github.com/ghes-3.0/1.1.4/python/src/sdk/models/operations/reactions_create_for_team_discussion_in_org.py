from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReactionsCreateForTeamDiscussionInOrgPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum(str, Enum):
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
class ReactionsCreateForTeamDiscussionInOrgRequestBody:
    content: ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass
class ReactionsCreateForTeamDiscussionInOrgRequest:
    path_params: ReactionsCreateForTeamDiscussionInOrgPathParams = field()
    request: Optional[ReactionsCreateForTeamDiscussionInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    reaction: Optional[shared.Reaction] = field(default=None)
    
