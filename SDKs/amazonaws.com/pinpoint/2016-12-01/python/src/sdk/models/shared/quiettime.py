from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QuietTime:
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'End' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Start' }})
    
