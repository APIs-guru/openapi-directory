from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SiteBinding:
    cert_thumbprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cert_thumbprint' }})
    host_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host_name' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    ssl_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_enabled' }})
    
