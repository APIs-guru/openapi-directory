from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkflowUsageBillableMacos:
    total_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_ms' }})
    

@dataclass_json
@dataclass
class WorkflowUsageBillableUbuntu:
    total_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_ms' }})
    

@dataclass_json
@dataclass
class WorkflowUsageBillableWindows:
    total_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_ms' }})
    

@dataclass_json
@dataclass
class WorkflowUsageBillable:
    macos: Optional[WorkflowUsageBillableMacos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MACOS' }})
    ubuntu: Optional[WorkflowUsageBillableUbuntu] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UBUNTU' }})
    windows: Optional[WorkflowUsageBillableWindows] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WINDOWS' }})
    

@dataclass_json
@dataclass
class WorkflowUsage:
    billable: WorkflowUsageBillable = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billable' }})
    
