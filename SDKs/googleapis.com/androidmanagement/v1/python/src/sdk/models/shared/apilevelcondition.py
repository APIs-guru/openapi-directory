from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APILevelCondition:
    r"""APILevelCondition
    A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
    """
    
    min_api_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minApiLevel') }})
    
