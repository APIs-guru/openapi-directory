from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceTargetDefinition:
    r"""ResourceTargetDefinition
    Information about a change to a resource attribute.
    """
    
    attribute: Optional[ResourceAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attribute') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    requires_recreation: Optional[RequiresRecreationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiresRecreation') }})
    
