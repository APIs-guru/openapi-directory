from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAppValidationConfigurationResponse:
    app_validation_configurations: Optional[List[AppValidationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appValidationConfigurations') }})
    server_group_validation_configurations: Optional[List[ServerGroupValidationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupValidationConfigurations') }})
    
