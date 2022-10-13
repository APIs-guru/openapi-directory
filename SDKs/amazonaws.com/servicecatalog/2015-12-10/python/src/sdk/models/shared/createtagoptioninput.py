from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateTagOptionInput:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
