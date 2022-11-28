from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerValidationConfiguration:
    r"""ServerValidationConfiguration
    Configuration for validating an instance.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server: Optional[Server] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    server_validation_strategy: Optional[ServerValidationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationStrategy') }})
    user_data_validation_parameters: Optional[UserDataValidationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDataValidationParameters') }})
    validation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationId') }})
    
