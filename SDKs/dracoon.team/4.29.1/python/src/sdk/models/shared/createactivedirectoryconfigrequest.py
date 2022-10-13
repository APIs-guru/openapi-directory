from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateActiveDirectoryConfigRequest:
    ad_export_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adExportGroup' }})
    alias: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    create_home_folder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createHomeFolder' }})
    home_folder_parent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeFolderParent' }})
    ldap_users_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldapUsersDomain' }})
    sds_import_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdsImportGroup' }})
    server_admin_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverAdminName' }})
    server_admin_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverAdminPassword' }})
    server_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverIp' }})
    server_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverPort' }})
    ssl_finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslFingerPrint' }})
    use_ldaps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLdaps' }})
    user_filter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFilter' }})
    user_import: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userImport' }})
    
