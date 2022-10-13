from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PorterLargeFile:
    oid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oid' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    ref_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref_name' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
