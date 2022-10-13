from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsDbInstanceVpcSecurityGroup:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    vpc_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSecurityGroupId' }})
    
