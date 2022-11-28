from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCreateDiscussionInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateDiscussionInOrgRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    

@dataclass
class TeamsCreateDiscussionInOrgRequest:
    path_params: TeamsCreateDiscussionInOrgPathParams = field()
    request: Optional[TeamsCreateDiscussionInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateDiscussionInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
