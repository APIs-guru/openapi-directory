from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkflowUsageBillableMacos:
    total_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclass
class WorkflowUsageBillableUbuntu:
    total_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclass
class WorkflowUsageBillableWindows:
    total_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_ms') }})
    

@dataclass_json
@dataclass
class WorkflowUsageBillable:
    macos: Optional[WorkflowUsageBillableMacos] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MACOS') }})
    ubuntu: Optional[WorkflowUsageBillableUbuntu] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UBUNTU') }})
    windows: Optional[WorkflowUsageBillableWindows] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WINDOWS') }})
    

@dataclass_json
@dataclass
class WorkflowUsage:
    r"""WorkflowUsage
    Workflow Usage
    """
    
    billable: WorkflowUsageBillable = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billable') }})
    
