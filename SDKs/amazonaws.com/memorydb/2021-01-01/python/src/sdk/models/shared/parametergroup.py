from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParameterGroup:
    r"""ParameterGroup
    Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ARN') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Family') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
