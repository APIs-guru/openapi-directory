from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileshareParam:
    fs_iops: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fsIOPS' }})
    fs_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fsName' }})
    fs_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fsSize' }})
    
