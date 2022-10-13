from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Term:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    
