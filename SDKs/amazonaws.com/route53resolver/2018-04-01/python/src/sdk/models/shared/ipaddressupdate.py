from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPAddressUpdate:
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ip' }})
    ip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpId' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    
