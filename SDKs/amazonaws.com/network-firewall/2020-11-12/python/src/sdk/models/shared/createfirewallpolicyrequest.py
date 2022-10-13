from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firewallpolicy
from . import tag


@dataclass_json
@dataclass
class CreateFirewallPolicyRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    firewall_policy: firewallpolicy.FirewallPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicy' }})
    firewall_policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
