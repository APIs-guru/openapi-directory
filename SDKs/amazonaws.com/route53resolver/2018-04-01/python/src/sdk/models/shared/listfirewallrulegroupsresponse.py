from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewallrulegroupmetadata


@dataclass_json
@dataclass
class ListFirewallRuleGroupsResponse:
    firewall_rule_groups: Optional[List[firewallrulegroupmetadata.FirewallRuleGroupMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallRuleGroups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
