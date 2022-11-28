from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TeamsAddOrUpdateProjectPermissionsPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsRequestBody:
    permission: Optional[TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissions403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsRequest:
    headers: TeamsAddOrUpdateProjectPermissionsHeaders = field()
    path_params: TeamsAddOrUpdateProjectPermissionsPathParams = field()
    request: Optional[TeamsAddOrUpdateProjectPermissionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    teams_add_or_update_project_permissions_403_application_json_object: Optional[TeamsAddOrUpdateProjectPermissions403ApplicationJSON] = field(default=None)
    
