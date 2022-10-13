from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportAddressRequest:
    ethaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethaddress' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    
