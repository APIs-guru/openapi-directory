from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody:
    permission: Optional[TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgRequest:
    path_params: TeamsAddOrUpdateProjectPermissionsInOrgPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateProjectPermissionsInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams_add_or_update_project_permissions_in_org_403_application_json_object: Optional[TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON] = field(default=None)
    
