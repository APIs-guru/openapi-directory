from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BlockedNumber:
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    phone_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    
