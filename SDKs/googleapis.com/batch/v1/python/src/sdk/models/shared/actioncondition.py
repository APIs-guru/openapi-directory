from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionCondition:
    r"""ActionCondition
    Conditions for actions to deal with task failures.
    """
    
    exit_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCodes') }})
    
