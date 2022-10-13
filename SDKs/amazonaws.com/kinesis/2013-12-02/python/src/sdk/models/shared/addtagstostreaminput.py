from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddTagsToStreamInput:
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    tags: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
