from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import firewallpolicyresponse


@dataclass_json
@dataclass
class DeleteFirewallPolicyResponse:
    firewall_policy_response: firewallpolicyresponse.FirewallPolicyResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyResponse' }})
    
