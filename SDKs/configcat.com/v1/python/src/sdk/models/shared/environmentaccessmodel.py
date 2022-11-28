from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentAccessModel:
    environment_access_type: Optional[EnvironmentAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccessType') }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
