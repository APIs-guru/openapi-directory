from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigOvenModelInstructionStep:
    end_gantt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndGantt' }})
    start_gantt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartGantt' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    
