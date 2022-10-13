from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReactionsCreateForTeamDiscussionInOrgPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
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
    content: ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionInOrgRequest:
    path_params: ReactionsCreateForTeamDiscussionInOrgPathParams = field(default=None)
    request: Optional[ReactionsCreateForTeamDiscussionInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForTeamDiscussionInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reaction: Optional[shared.Reaction] = field(default=None)
    
