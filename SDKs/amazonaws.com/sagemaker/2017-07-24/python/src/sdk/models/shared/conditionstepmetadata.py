from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conditionoutcome_enum


@dataclass_json
@dataclass
class ConditionStepMetadata:
    outcome: Optional[conditionoutcome_enum.ConditionOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outcome' }})
    
