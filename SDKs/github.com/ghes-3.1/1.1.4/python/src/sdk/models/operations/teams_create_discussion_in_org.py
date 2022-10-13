from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCreateDiscussionInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateDiscussionInOrgRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class TeamsCreateDiscussionInOrgRequest:
    path_params: TeamsCreateDiscussionInOrgPathParams = field(default=None)
    request: Optional[TeamsCreateDiscussionInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateDiscussionInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
