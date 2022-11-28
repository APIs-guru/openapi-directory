from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerGroupValidationConfiguration:
    r"""ServerGroupValidationConfiguration
    Configuration for validating an instance.
    """
    
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_validation_configurations: Optional[List[ServerValidationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationConfigurations') }})
    
