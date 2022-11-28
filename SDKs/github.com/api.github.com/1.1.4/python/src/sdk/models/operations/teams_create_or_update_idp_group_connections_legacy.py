from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups:
    group_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_description') }})
    group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody:
    groups: List[TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    synced_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synced_at') }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest:
    path_params: TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams = field()
    request: Optional[TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
