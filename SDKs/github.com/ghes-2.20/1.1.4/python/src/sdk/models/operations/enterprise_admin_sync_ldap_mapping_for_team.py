from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EnterpriseAdminSyncLdapMappingForTeamPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class EnterpriseAdminSyncLdapMappingForTeamRequest:
    path_params: EnterpriseAdminSyncLdapMappingForTeamPathParams = field()
    

@dataclass
class EnterpriseAdminSyncLdapMappingForTeamResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_sync_ldap_mapping_for_team_201_application_json_object: Optional[EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON] = field(default=None)
    
