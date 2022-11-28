from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TeamsAddOrUpdateRepoPermissionsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateRepoPermissionsRequestBody:
    permission: Optional[TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsRequest:
    path_params: TeamsAddOrUpdateRepoPermissionsPathParams = field()
    request: Optional[TeamsAddOrUpdateRepoPermissionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    
