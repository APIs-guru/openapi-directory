from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firewallrulegroupassociation


@dataclass_json
@dataclass
class DisassociateFirewallRuleGroupResponse:
    firewall_rule_group_association: Optional[firewallrulegroupassociation.FirewallRuleGroupAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupAssociation' }})
    
