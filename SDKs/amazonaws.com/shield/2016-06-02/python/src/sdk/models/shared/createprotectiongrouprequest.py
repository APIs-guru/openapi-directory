from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import protectiongroupaggregation_enum
from . import protectiongrouppattern_enum
from . import protectedresourcetype_enum
from . import tag


@dataclass_json
@dataclass
class CreateProtectionGroupRequest:
    aggregation: protectiongroupaggregation_enum.ProtectionGroupAggregationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aggregation' }})
    members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Members' }})
    pattern: protectiongrouppattern_enum.ProtectionGroupPatternEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pattern' }})
    protection_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionGroupId' }})
    resource_type: Optional[protectedresourcetype_enum.ProtectedResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
