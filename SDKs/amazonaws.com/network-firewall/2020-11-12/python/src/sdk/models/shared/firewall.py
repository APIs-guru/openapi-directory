from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subnetmapping
from . import tag


@dataclass_json
@dataclass
class Firewall:
    delete_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteProtection' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallArn' }})
    firewall_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallId' }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallName' }})
    firewall_policy_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyArn' }})
    firewall_policy_change_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallPolicyChangeProtection' }})
    subnet_change_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetChangeProtection' }})
    subnet_mappings: List[subnetmapping.SubnetMapping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetMappings' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
