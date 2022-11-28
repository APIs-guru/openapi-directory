from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Firewall:
    r"""Firewall
    <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
    """
    
    firewall_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallId') }})
    firewall_policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyArn') }})
    subnet_mappings: List[SubnetMapping] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetMappings') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    delete_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteProtection') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallArn') }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallName') }})
    firewall_policy_change_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyChangeProtection') }})
    subnet_change_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetChangeProtection') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
