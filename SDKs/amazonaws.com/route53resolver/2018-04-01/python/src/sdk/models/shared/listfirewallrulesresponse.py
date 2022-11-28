from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFirewallRulesResponse:
    firewall_rules: Optional[List[FirewallRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRules') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
