from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ElasticLoadBalancer:
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    ec2_instance_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2InstanceIds' }})
    elastic_load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticLoadBalancerName' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerId' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
