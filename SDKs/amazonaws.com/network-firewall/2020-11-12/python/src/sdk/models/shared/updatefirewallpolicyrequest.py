from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firewallpolicy


@dataclass_json
@dataclass
class UpdateFirewallPolicyRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    firewall_policy: firewallpolicy.FirewallPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicy' }})
    firewall_policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyArn' }})
    firewall_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyName' }})
    update_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
