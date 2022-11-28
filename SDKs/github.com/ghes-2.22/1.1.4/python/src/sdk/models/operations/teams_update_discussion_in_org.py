from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsUpdateDiscussionInOrgPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsUpdateDiscussionInOrgRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class TeamsUpdateDiscussionInOrgRequest:
    path_params: TeamsUpdateDiscussionInOrgPathParams = field()
    request: Optional[TeamsUpdateDiscussionInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateDiscussionInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_discussion: Optional[shared.TeamDiscussion] = field(default=None)
    
