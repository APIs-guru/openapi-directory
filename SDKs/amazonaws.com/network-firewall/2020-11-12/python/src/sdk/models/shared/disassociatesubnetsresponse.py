from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subnetmapping


@dataclass_json
@dataclass
class DisassociateSubnetsResponse:
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallArn' }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallName' }})
    subnet_mappings: Optional[List[subnetmapping.SubnetMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetMappings' }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
