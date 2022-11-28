from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRuleGroupRequest:
    capacity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capacity') }})
    rule_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupName') }})
    type: RuleGroupTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    rule_group: Optional[RuleGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroup') }})
    rules: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
