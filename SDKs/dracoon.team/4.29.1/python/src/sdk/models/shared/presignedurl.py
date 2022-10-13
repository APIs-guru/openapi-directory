from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PresignedURL:
    part_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partNumber' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
