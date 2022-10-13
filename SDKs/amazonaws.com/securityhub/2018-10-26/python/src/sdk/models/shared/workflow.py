from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workflowstatus_enum


@dataclass_json
@dataclass
class Workflow:
    status: Optional[workflowstatus_enum.WorkflowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
