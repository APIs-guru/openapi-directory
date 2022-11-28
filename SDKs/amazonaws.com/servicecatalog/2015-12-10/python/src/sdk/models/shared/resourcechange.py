from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceChange:
    r"""ResourceChange
    Information about a resource change that will occur when a plan is executed.
    """
    
    action: Optional[ChangeActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    details: Optional[List[ResourceChangeDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    logical_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogicalResourceId') }})
    physical_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhysicalResourceId') }})
    replacement: Optional[ReplacementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replacement') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    scope: Optional[List[ResourceAttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scope') }})
    
