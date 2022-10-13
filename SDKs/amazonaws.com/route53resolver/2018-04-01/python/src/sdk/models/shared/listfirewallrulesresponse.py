from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewallrule


@dataclass_json
@dataclass
class ListFirewallRulesResponse:
    firewall_rules: Optional[List[firewallrule.FirewallRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRules' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
