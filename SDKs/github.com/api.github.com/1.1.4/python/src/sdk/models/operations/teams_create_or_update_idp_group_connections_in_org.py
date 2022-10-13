from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups:
    group_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_description' }})
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_name' }})
    

@dataclass_json
@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody:
    groups: List[TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest:
    path_params: TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams = field(default=None)
    request: Optional[TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    
