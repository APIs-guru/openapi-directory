from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firewallrulegroup


@dataclass_json
@dataclass
class GetFirewallRuleGroupResponse:
    firewall_rule_group: Optional[firewallrulegroup.FirewallRuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroup' }})
    
