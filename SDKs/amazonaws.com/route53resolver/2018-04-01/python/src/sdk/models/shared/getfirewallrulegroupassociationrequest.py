from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetFirewallRuleGroupAssociationRequest:
    firewall_rule_group_association_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupAssociationId' }})
    
