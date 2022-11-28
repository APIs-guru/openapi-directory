from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsUpdateMembershipRolesPathParams:
    membership_id: str = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsUpdateMembershipRolesRequestBody:
    roles: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

@dataclass
class TeamsUpdateMembershipRolesSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TeamsUpdateMembershipRolesRequest:
    path_params: TeamsUpdateMembershipRolesPathParams = field()
    security: TeamsUpdateMembershipRolesSecurity = field()
    request: Optional[TeamsUpdateMembershipRolesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateMembershipRolesResponse:
    content_type: str = field()
    status_code: int = field()
    membership: Optional[shared.Membership] = field(default=None)
    
