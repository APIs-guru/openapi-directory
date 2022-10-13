from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iterationresult


@dataclass_json
@dataclass
class MlStatistics:
    iteration_results: Optional[List[iterationresult.IterationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iterationResults' }})
    max_iterations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIterations' }})
    
