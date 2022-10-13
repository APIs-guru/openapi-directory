from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelWorkflowExecutionDecisionAttributes:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    
