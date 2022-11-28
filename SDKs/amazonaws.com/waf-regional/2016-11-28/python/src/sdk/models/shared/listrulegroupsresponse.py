from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRuleGroupsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    rule_groups: Optional[List[RuleGroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroups') }})
    
