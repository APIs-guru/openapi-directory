from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestActiveDirectoryConfigRequest:
    r"""TestActiveDirectoryConfigRequest
    Request model for testing connection for Active Directory configuration
    """
    
    ldap_users_domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldapUsersDomain') }})
    server_admin_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAdminName') }})
    server_admin_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAdminPassword') }})
    server_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverIp') }})
    server_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverPort') }})
    ssl_finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslFingerPrint') }})
    use_ldaps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLdaps') }})
    
