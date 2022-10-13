from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeneratePresignedUrlsRequest:
    first_part_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPartNumber' }})
    last_part_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPartNumber' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
