from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FirewallRuleActionEnum(str, Enum):
    UNSPECIFIED_ACTION = "UNSPECIFIED_ACTION"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclass
class FirewallRule:
    r"""FirewallRule
    A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.
    """
    
    action: Optional[FirewallRuleActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    source_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRange') }})
    
