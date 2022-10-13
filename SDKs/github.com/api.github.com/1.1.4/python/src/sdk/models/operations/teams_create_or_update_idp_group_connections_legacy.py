from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    group_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_description' }})
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody:
    groups: List[TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    synced_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synced_at' }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest:
    path_params: TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams = field(default=None)
    request: Optional[TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
