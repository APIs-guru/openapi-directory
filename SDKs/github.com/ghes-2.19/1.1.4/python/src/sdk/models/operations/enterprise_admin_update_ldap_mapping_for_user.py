from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateLdapMappingForUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateLdapMappingForUserRequestBody:
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_dn' }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForUserRequest:
    path_params: EnterpriseAdminUpdateLdapMappingForUserPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdateLdapMappingForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ldap_mapping_user: Optional[shared.LdapMappingUser] = field(default=None)
    
