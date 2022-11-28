from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectionGroup:
    r"""ProtectionGroup
    A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
    """
    
    aggregation: ProtectionGroupAggregationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aggregation') }})
    members: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Members') }})
    pattern: ProtectionGroupPatternEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pattern') }})
    protection_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroupId') }})
    protection_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroupArn') }})
    resource_type: Optional[ProtectedResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
