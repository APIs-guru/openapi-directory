from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChunkUploadResponse:
    hash: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
