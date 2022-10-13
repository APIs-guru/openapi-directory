from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkInterface:
    ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ips' }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrimary' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macAddress' }})
    
