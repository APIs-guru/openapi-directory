from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinuxHostingDetail:
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_size') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_name') }})
    ftp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_enabled') }})
    ftp_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_username') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    ip_type: Optional[LinuxIPTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_type') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_size') }})
    max_webspace_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_webspace_size') }})
    mysql_database_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql_database_names') }})
    php_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('php_version') }})
    servicepack_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicepack_id') }})
    sites: Optional[List[LinuxSite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    ssh_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_host') }})
    ssh_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_username') }})
    webspace_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webspace_usage') }})
    
