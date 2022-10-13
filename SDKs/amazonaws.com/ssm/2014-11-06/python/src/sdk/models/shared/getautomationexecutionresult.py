from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import automationexecution


@dataclass_json
@dataclass
class GetAutomationExecutionResult:
    automation_execution: Optional[automationexecution.AutomationExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationExecution' }})
    
