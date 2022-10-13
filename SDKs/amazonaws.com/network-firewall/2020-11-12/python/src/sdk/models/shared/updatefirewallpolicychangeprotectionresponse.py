from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateFirewallPolicyChangeProtectionResponse:
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallArn' }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallName' }})
    firewall_policy_change_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyChangeProtection' }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
