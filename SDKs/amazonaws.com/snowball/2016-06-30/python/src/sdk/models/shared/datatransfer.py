from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataTransfer:
    bytes_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BytesTransferred' }})
    objects_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectsTransferred' }})
    total_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalBytes' }})
    total_objects: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalObjects' }})
    
