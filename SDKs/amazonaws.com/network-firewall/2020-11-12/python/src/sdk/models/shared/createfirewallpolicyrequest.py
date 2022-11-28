from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFirewallPolicyRequest:
    firewall_policy: FirewallPolicy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicy') }})
    firewall_policy_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
