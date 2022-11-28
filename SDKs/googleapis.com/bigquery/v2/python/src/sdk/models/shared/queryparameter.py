from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryParameter:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameter_type: Optional[QueryParameterType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterType') }})
    parameter_value: Optional[QueryParameterValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValue') }})
    
