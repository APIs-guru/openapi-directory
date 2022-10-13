from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestActiveDirectoryConfigResponse:
    ldap_users_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldapUsersDomain' }})
    server_admin_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverAdminName' }})
    server_admin_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverAdminPassword' }})
    server_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverIp' }})
    server_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverPort' }})
    ssl_finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslFingerPrint' }})
    use_ldaps: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLdaps' }})
    
