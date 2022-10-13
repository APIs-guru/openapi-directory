from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigQueryModelTraining:
    current_iteration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentIteration' }})
    expected_total_iterations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedTotalIterations' }})
    
