from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowautomationparameters
from . import maintenancewindowlambdaparameters
from . import maintenancewindowruncommandparameters
from . import maintenancewindowstepfunctionsparameters


@dataclass_json
@dataclass
class MaintenanceWindowTaskInvocationParameters:
    automation: Optional[maintenancewindowautomationparameters.MaintenanceWindowAutomationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Automation' }})
    lambda_: Optional[maintenancewindowlambdaparameters.MaintenanceWindowLambdaParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lambda' }})
    run_command: Optional[maintenancewindowruncommandparameters.MaintenanceWindowRunCommandParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunCommand' }})
    step_functions: Optional[maintenancewindowstepfunctionsparameters.MaintenanceWindowStepFunctionsParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepFunctions' }})
    
