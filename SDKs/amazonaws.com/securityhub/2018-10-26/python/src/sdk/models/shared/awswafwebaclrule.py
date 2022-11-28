from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsWafWebACLRule:
    r"""AwsWafWebACLRule
    Details for a rule in an WAF WebACL.
    """
    
    action: Optional[WafAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    excluded_rules: Optional[List[WafExcludedRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedRules') }})
    override_action: Optional[WafOverrideAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverrideAction') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
