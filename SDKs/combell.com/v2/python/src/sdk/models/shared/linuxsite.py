from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hostheader


@dataclass_json
@dataclass
class LinuxSite:
    host_headers: Optional[List[hostheader.HostHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host_headers' }})
    http2_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2_enabled' }})
    https_redirect_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'https_redirect_enabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    ssl_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_enabled' }})
    
