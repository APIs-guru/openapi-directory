from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateFirewallRuleGroupRequest:
    creator_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    firewall_rule_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    mutation_protection: Optional[MutationProtectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MutationProtection') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
