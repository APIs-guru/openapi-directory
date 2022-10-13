from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2instancenetworkinterfacesdetails


@dataclass_json
@dataclass
class AwsEc2InstanceDetails:
    iam_instance_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamInstanceProfileArn' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    ip_v4_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpV4Addresses' }})
    ip_v6_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpV6Addresses' }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyName' }})
    launched_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchedAt' }})
    network_interfaces: Optional[List[awsec2instancenetworkinterfacesdetails.AwsEc2InstanceNetworkInterfacesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkInterfaces' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
