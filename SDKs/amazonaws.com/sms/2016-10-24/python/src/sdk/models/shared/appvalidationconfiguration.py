from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppValidationConfiguration:
    r"""AppValidationConfiguration
    Configuration for validating an application.
    """
    
    app_validation_strategy: Optional[AppValidationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appValidationStrategy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssm_validation_parameters: Optional[SsmValidationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmValidationParameters') }})
    validation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationId') }})
    
