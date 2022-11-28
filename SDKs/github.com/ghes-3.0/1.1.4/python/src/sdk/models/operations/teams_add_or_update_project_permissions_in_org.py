from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody:
    permission: Optional[TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgRequest:
    path_params: TeamsAddOrUpdateProjectPermissionsInOrgPathParams = field()
    request: Optional[TeamsAddOrUpdateProjectPermissionsInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    teams_add_or_update_project_permissions_in_org_403_application_json_object: Optional[TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON] = field(default=None)
    
