from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkMountPoint:
    default_gateway: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultGateway' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    logical_interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalInterface' }})
    
