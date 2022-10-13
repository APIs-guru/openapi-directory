from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkaddress
from . import networkaddress


@dataclass_json
@dataclass
class InstanceConfig:
    client_network: Optional[networkaddress.NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientNetwork' }})
    hyperthreading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperthreading' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osImage' }})
    private_network: Optional[networkaddress.NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateNetwork' }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userNote' }})
    
