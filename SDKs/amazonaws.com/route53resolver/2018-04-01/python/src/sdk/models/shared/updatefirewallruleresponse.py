from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firewallrule


@dataclass_json
@dataclass
class UpdateFirewallRuleResponse:
    firewall_rule: Optional[firewallrule.FirewallRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRule' }})
    
