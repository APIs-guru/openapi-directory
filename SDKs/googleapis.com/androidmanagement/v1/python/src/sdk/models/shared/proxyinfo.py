from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProxyInfo:
    excluded_hosts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedHosts' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    pac_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pacUri' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    
