from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindingAction:
    r"""FindingAction
    Provides information about an action that occurred for a resource and produced a policy finding.
    """
    
    action_type: Optional[FindingActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    api_call_details: Optional[APICallDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiCallDetails') }})
    
