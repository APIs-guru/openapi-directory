from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import stoptype_enum


@dataclass_json
@dataclass
class StopAutomationExecutionRequest:
    automation_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationExecutionId' }})
    type: Optional[stoptype_enum.StopTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
