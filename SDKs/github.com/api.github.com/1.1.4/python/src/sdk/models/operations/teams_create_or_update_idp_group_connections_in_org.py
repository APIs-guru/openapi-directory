from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups:
    group_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_description') }})
    group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_name') }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody:
    groups: List[TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest:
    path_params: TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams = field()
    request: Optional[TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    
