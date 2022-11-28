from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"
    MAINTAIN = "maintain"
    TRIAGE = "triage"


@dataclass_json
@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody:
    permission: Optional[TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgRequest:
    path_params: TeamsAddOrUpdateRepoPermissionsInOrgPathParams = field()
    request: Optional[TeamsAddOrUpdateRepoPermissionsInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
