from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateLdapMappingForUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateLdapMappingForUserRequestBody:
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_dn') }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForUserRequest:
    path_params: EnterpriseAdminUpdateLdapMappingForUserPathParams = field()
    request: Optional[EnterpriseAdminUpdateLdapMappingForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateLdapMappingForUserResponse:
    content_type: str = field()
    status_code: int = field()
    ldap_mapping_user: Optional[shared.LdapMappingUser] = field(default=None)
    
