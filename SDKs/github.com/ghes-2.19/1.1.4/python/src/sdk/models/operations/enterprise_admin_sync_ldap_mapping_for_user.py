from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class EnterpriseAdminSyncLdapMappingForUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminSyncLdapMappingForUserRequest:
    path_params: EnterpriseAdminSyncLdapMappingForUserPathParams = field(default=None)
    

@dataclass_json
@dataclass
class EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class EnterpriseAdminSyncLdapMappingForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_sync_ldap_mapping_for_user_201_application_json_object: Optional[EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON] = field(default=None)
    
