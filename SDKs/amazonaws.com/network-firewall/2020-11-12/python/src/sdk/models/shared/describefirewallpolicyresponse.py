from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firewallpolicy
from . import firewallpolicyresponse


@dataclass_json
@dataclass
class DescribeFirewallPolicyResponse:
    firewall_policy: Optional[firewallpolicy.FirewallPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicy' }})
    firewall_policy_response: firewallpolicyresponse.FirewallPolicyResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyResponse' }})
    update_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
