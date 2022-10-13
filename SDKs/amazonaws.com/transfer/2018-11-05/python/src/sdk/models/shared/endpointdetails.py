from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointDetails:
    address_allocation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressAllocationIds' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    vpc_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcEndpointId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
