from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FirewallRuleActionEnum(str, Enum):
    UNSPECIFIED_ACTION = "UNSPECIFIED_ACTION"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclass
class FirewallRule:
    action: Optional[FirewallRuleActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    source_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceRange' }})
    
