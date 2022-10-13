from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcestatus_enum
from . import tag
from . import rulegrouptype_enum


@dataclass_json
@dataclass
class RuleGroupResponse:
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Capacity' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    rule_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupArn' }})
    rule_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupId' }})
    rule_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupName' }})
    rule_group_status: Optional[resourcestatus_enum.ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupStatus' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: Optional[rulegrouptype_enum.RuleGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
