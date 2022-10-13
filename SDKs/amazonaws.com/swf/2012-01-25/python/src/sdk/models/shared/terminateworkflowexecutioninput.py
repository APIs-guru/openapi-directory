from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import childpolicy_enum


@dataclass_json
@dataclass
class TerminateWorkflowExecutionInput:
    child_policy: Optional[childpolicy_enum.ChildPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicy' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runId' }})
    workflow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowId' }})
    
