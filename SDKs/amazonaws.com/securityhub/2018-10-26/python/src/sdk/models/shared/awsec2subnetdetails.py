from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ipv6cidrblockassociation


@dataclass_json
@dataclass
class AwsEc2SubnetDetails:
    assign_ipv6_address_on_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignIpv6AddressOnCreation' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    availability_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZoneId' }})
    available_ip_address_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailableIpAddressCount' }})
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrBlock' }})
    default_for_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultForAz' }})
    ipv6_cidr_block_association_set: Optional[List[ipv6cidrblockassociation.Ipv6CidrBlockAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ipv6CidrBlockAssociationSet' }})
    map_public_ip_on_launch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapPublicIpOnLaunch' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    subnet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetArn' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
