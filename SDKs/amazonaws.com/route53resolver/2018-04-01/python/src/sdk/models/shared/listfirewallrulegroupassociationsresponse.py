from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewallrulegroupassociation


@dataclass_json
@dataclass
class ListFirewallRuleGroupAssociationsResponse:
    firewall_rule_group_associations: Optional[List[firewallrulegroupassociation.FirewallRuleGroupAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroupAssociations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
