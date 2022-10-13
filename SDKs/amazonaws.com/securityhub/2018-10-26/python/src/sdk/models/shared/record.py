from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Record:
    json_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JsonPath' }})
    record_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordIndex' }})
    
