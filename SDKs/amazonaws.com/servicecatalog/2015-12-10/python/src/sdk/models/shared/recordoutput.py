from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RecordOutput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    output_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputKey' }})
    output_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputValue' }})
    
