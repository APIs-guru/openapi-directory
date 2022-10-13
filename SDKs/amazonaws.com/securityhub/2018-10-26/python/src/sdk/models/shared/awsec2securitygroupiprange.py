from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2SecurityGroupIPRange:
    cidr_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrIp' }})
    
