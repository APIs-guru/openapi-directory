from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import customstepstatus_enum


@dataclass_json
@dataclass
class SendWorkflowStepStateRequest:
    execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    status: customstepstatus_enum.CustomStepStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Token' }})
    workflow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowId' }})
    
