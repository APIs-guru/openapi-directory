from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutFirewallRuleGroupPolicyRequest:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    firewall_rule_group_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupPolicy' }})
    
