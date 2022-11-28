from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProtectionGroupRequest:
    aggregation: ProtectionGroupAggregationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aggregation') }})
    pattern: ProtectionGroupPatternEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pattern') }})
    protection_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroupId') }})
    members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Members') }})
    resource_type: Optional[ProtectedResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
