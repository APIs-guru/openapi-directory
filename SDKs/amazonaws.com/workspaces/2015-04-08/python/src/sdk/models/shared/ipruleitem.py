from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPRuleItem:
    r"""IPRuleItem
    Describes a rule for an IP access control group.
    """
    
    ip_rule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipRule') }})
    rule_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleDesc') }})
    
