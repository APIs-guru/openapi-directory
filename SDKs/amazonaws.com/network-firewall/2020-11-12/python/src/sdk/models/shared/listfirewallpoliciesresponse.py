from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewallpolicymetadata


@dataclass_json
@dataclass
class ListFirewallPoliciesResponse:
    firewall_policies: Optional[List[firewallpolicymetadata.FirewallPolicyMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicies' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
