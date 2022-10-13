from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import objectivesensitivity_enum


@dataclass_json
@dataclass
class OptimizationObjective:
    item_attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemAttribute' }})
    objective_sensitivity: Optional[objectivesensitivity_enum.ObjectiveSensitivityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectiveSensitivity' }})
    
