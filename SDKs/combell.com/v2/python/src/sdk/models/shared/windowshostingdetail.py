from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WindowsHostingDetail:
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_size') }})
    application_pool: Optional[ApplicationPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_pool') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_name') }})
    ftp_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_username') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    ip_type: Optional[WindowsIPTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_type') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_size') }})
    mssql_database_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mssql_database_names') }})
    servicepack_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicepack_id') }})
    sites: Optional[List[WindowsSite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    
