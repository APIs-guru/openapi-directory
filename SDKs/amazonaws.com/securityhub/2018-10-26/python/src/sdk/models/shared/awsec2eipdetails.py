from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2EipDetails:
    allocation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocationId' }})
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    network_border_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkBorderGroup' }})
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkInterfaceId' }})
    network_interface_owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkInterfaceOwnerId' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateIpAddress' }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicIp' }})
    public_ipv4_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicIpv4Pool' }})
    
