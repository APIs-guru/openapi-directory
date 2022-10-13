from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import applicationpool
from . import windowsiptype_enum
from . import windowssite


@dataclass_json
@dataclass
class WindowsHostingDetail:
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actual_size' }})
    application_pool: Optional[applicationpool.ApplicationPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_pool' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_name' }})
    ftp_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ftp_username' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    ip_type: Optional[windowsiptype_enum.WindowsIPTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_type' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_size' }})
    mssql_database_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mssql_database_names' }})
    servicepack_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicepack_id' }})
    sites: Optional[List[windowssite.WindowsSite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    
