from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFirewallRequest:
    firewall_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallName') }})
    firewall_policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyArn') }})
    subnet_mappings: List[SubnetMapping] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetMappings') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    delete_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteProtection') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    firewall_policy_change_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyChangeProtection') }})
    subnet_change_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetChangeProtection') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
