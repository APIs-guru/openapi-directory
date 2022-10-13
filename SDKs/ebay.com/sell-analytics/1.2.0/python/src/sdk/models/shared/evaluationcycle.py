from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EvaluationCycle:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    evaluation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationDate' }})
    evaluation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationType' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
