from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateActiveDirectoryConfigRequest:
    r"""CreateActiveDirectoryConfigRequest
    Request model for creating an Active Directory configuration
    """
    
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    ldap_users_domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldapUsersDomain') }})
    server_admin_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAdminName') }})
    server_admin_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAdminPassword') }})
    server_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverIp') }})
    server_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverPort') }})
    user_filter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFilter') }})
    ad_export_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adExportGroup') }})
    create_home_folder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createHomeFolder') }})
    home_folder_parent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeFolderParent') }})
    sds_import_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdsImportGroup') }})
    ssl_finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslFingerPrint') }})
    use_ldaps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLdaps') }})
    user_import: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImport') }})
    
