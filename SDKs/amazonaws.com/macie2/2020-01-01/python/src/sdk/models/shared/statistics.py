from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Statistics:
    approximate_number_of_objects_to_process: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approximateNumberOfObjectsToProcess' }})
    number_of_runs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfRuns' }})
    
