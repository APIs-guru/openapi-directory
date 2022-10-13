from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VpcConfigResponse:
    assign_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignPublicIp' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroups' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcId' }})
    
