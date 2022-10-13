from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import linuxiptype_enum
from . import linuxsite


@dataclass_json
@dataclass
class LinuxHostingDetail:
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actual_size' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_name' }})
    ftp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ftp_enabled' }})
    ftp_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ftp_username' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    ip_type: Optional[linuxiptype_enum.LinuxIPTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_type' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_size' }})
    max_webspace_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_webspace_size' }})
    mysql_database_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysql_database_names' }})
    php_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'php_version' }})
    servicepack_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicepack_id' }})
    sites: Optional[List[linuxsite.LinuxSite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    ssh_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_host' }})
    ssh_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_username' }})
    webspace_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webspace_usage' }})
    
