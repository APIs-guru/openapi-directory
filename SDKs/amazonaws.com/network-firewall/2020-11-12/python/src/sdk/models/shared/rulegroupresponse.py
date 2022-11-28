from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleGroupResponse:
    r"""RuleGroupResponse
    The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
    """
    
    rule_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupArn') }})
    rule_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupId') }})
    rule_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupName') }})
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capacity') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    rule_group_status: Optional[ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupStatus') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    type: Optional[RuleGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
