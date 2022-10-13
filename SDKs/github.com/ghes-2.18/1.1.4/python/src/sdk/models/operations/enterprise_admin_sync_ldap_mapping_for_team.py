from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class EnterpriseAdminSyncLdapMappingForTeamPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminSyncLdapMappingForTeamRequest:
    path_params: EnterpriseAdminSyncLdapMappingForTeamPathParams = field(default=None)
    

@dataclass_json
@dataclass
class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class EnterpriseAdminSyncLdapMappingForTeamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_sync_ldap_mapping_for_team_201_application_json_object: Optional[EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON] = field(default=None)
    
