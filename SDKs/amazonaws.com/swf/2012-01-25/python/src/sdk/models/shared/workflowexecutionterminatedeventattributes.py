from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workflowexecutionterminatedcause_enum
from . import childpolicy_enum


@dataclass_json
@dataclass
class WorkflowExecutionTerminatedEventAttributes:
    cause: Optional[workflowexecutionterminatedcause_enum.WorkflowExecutionTerminatedCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    child_policy: childpolicy_enum.ChildPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicy' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
