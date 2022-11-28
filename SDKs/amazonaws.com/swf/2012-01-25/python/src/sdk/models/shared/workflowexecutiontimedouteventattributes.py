from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowExecutionTimedOutEventAttributes:
    r"""WorkflowExecutionTimedOutEventAttributes
    Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
    """
    
    child_policy: ChildPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    timeout_type: WorkflowExecutionTimeoutTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    
