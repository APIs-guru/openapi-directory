from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIResourceLinkedResources:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    unified_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_property') }})
    

@dataclass_json
@dataclass
class APIResource:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    linked_resources: Optional[List[APIResourceLinkedResources]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linked_resources') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    status: Optional[ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
