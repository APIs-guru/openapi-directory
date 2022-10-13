from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteFirewallPolicyRequest:
    firewall_policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyArn' }})
    firewall_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyName' }})
    
