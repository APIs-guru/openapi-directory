from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteAddressRequest:
    ethereumaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethereumaddress' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    
