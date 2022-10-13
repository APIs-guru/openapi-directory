from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Cycle:
    cycle_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycleType' }})
    evaluation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationDate' }})
    evaluation_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMonth' }})
    
