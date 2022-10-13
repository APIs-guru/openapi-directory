from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ForgetpaireddeviceRequest:
    bond: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bond' }})
    mac_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    
