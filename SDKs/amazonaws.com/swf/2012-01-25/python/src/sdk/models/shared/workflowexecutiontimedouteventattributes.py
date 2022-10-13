from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import childpolicy_enum
from . import workflowexecutiontimeouttype_enum


@dataclass_json
@dataclass
class WorkflowExecutionTimedOutEventAttributes:
    child_policy: childpolicy_enum.ChildPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicy' }})
    timeout_type: workflowexecutiontimeouttype_enum.WorkflowExecutionTimeoutTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutType' }})
    
