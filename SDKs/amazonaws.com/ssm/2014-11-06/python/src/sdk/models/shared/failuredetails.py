from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FailureDetails:
    details: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    failure_stage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureStage' }})
    failure_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureType' }})
    
