from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateActiveDirectoryConfigRequest:
    r"""UpdateActiveDirectoryConfigRequest
    Request model for updating an Active Directory configuration
    """
    
    ad_export_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adExportGroup') }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    create_home_folder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createHomeFolder') }})
    home_folder_parent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeFolderParent') }})
    ldap_users_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldapUsersDomain') }})
    sds_import_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdsImportGroup') }})
    server_admin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAdminName') }})
    server_admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverAdminPassword') }})
    server_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverIp') }})
    server_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverPort') }})
    ssl_finger_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslFingerPrint') }})
    use_ldaps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLdaps') }})
    user_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFilter') }})
    user_import: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImport') }})
    
