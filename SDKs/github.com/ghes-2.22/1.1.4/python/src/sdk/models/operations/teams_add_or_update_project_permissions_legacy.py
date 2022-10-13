from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsAddOrUpdateProjectPermissionsLegacyPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody:
    permission: Optional[TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsLegacyRequest:
    path_params: TeamsAddOrUpdateProjectPermissionsLegacyPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateProjectPermissionsLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    teams_add_or_update_project_permissions_legacy_403_application_json_object: Optional[TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON] = field(default=None)
    teams_add_or_update_project_permissions_legacy_415_application_json_object: Optional[TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
