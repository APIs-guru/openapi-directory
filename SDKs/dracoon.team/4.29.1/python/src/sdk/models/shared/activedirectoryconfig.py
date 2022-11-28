from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActiveDirectoryConfig:
    r"""ActiveDirectoryConfig
    Active Directory configuration
    """
    
    ad_export_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adExportGroup') }})
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ldap_users_domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldapUsersDomain') }})
    server_admin_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAdminName') }})
    server_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverIp') }})
    server_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverPort') }})
    use_ldaps: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLdaps') }})
    user_filter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFilter') }})
    user_import: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImport') }})
    create_home_folder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createHomeFolder') }})
    home_folder_parent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeFolderParent') }})
    sds_import_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdsImportGroup') }})
    ssl_finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslFingerPrint') }})
    
