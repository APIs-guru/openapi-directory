from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tag:
    tag_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKey' }})
    tag_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagValue' }})
    
