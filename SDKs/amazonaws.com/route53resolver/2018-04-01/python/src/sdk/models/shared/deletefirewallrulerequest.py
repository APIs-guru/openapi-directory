from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteFirewallRuleRequest:
    firewall_domain_list_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainListId') }})
    firewall_rule_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupId') }})
    
