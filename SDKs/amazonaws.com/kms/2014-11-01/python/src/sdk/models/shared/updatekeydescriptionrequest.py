from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateKeyDescriptionRequest:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    
