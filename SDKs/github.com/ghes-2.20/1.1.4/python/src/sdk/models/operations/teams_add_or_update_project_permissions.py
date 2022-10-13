from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class TeamsAddOrUpdateProjectPermissionsPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    
class TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsRequestBody:
    permission: Optional[TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsRequest:
    path_params: TeamsAddOrUpdateProjectPermissionsPathParams = field(default=None)
    headers: TeamsAddOrUpdateProjectPermissionsHeaders = field(default=None)
    request: Optional[TeamsAddOrUpdateProjectPermissionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissions403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams_add_or_update_project_permissions_403_application_json_object: Optional[TeamsAddOrUpdateProjectPermissions403ApplicationJSON] = field(default=None)
    
