from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamRequestBody:
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_dn') }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamRequest:
    path_params: EnterpriseAdminUpdateLdapMappingForTeamPathParams = field()
    request: Optional[EnterpriseAdminUpdateLdapMappingForTeamRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamResponse:
    content_type: str = field()
    status_code: int = field()
    ldap_mapping_team: Optional[shared.LdapMappingTeam] = field(default=None)
    
