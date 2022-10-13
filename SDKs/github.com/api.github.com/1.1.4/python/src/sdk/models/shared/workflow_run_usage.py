from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkflowRunUsageBillableMacos:
    jobs: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    total_ms: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_ms' }})
    

@dataclass_json
@dataclass
class WorkflowRunUsageBillableUbuntu:
    jobs: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    total_ms: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_ms' }})
    

@dataclass_json
@dataclass
class WorkflowRunUsageBillableWindows:
    jobs: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    total_ms: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_ms' }})
    

@dataclass_json
@dataclass
class WorkflowRunUsageBillable:
    macos: Optional[WorkflowRunUsageBillableMacos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MACOS' }})
    ubuntu: Optional[WorkflowRunUsageBillableUbuntu] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UBUNTU' }})
    windows: Optional[WorkflowRunUsageBillableWindows] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WINDOWS' }})
    

@dataclass_json
@dataclass
class WorkflowRunUsage:
    billable: WorkflowRunUsageBillable = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billable' }})
    run_duration_ms: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_duration_ms' }})
    
