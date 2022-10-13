from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnlabelParameterVersionResult:
    invalid_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvalidLabels' }})
    removed_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemovedLabels' }})
    
