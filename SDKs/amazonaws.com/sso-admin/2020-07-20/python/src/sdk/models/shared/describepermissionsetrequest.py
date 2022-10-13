from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribePermissionSetRequest:
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    permission_set_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    
