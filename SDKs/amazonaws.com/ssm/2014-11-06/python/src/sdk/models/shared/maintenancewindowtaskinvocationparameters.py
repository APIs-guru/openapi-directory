from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MaintenanceWindowTaskInvocationParameters:
    r"""MaintenanceWindowTaskInvocationParameters
    The parameters for task execution.
    """
    
    automation: Optional[MaintenanceWindowAutomationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Automation') }})
    lambda_: Optional[MaintenanceWindowLambdaParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lambda') }})
    run_command: Optional[MaintenanceWindowRunCommandParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunCommand') }})
    step_functions: Optional[MaintenanceWindowStepFunctionsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepFunctions') }})
    
