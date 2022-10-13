from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails:
    assign_public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignPublicIp' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subnets' }})
    
