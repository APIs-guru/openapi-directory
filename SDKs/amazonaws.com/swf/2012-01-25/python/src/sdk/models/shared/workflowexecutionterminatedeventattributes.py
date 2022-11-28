from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowExecutionTerminatedEventAttributes:
    r"""WorkflowExecutionTerminatedEventAttributes
    Provides the details of the <code>WorkflowExecutionTerminated</code> event.
    """
    
    child_policy: ChildPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    cause: Optional[WorkflowExecutionTerminatedCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
