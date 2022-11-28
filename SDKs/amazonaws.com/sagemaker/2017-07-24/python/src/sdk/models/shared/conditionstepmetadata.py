from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConditionStepMetadata:
    r"""ConditionStepMetadata
    Metadata for a Condition step.
    """
    
    outcome: Optional[ConditionOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outcome') }})
    
