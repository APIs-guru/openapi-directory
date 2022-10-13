from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublicIPAddressEntity:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_name' }})
    
