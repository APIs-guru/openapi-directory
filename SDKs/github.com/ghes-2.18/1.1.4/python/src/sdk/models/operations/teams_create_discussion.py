from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCreateDiscussionPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCreateDiscussionHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateDiscussionRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class TeamsCreateDiscussionRequest:
    path_params: TeamsCreateDiscussionPathParams = field(default=None)
    headers: TeamsCreateDiscussionHeaders = field(default=None)
    request: Optional[TeamsCreateDiscussionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateDiscussionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
