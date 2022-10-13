from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamRequestBody:
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_dn' }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamRequest:
    path_params: EnterpriseAdminUpdateLdapMappingForTeamPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdateLdapMappingForTeamRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForTeamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ldap_mapping_team: Optional[shared.LdapMappingTeam] = field(default=None)
    
