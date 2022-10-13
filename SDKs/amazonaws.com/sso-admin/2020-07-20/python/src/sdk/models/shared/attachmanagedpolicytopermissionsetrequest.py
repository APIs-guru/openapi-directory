from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachManagedPolicyToPermissionSetRequest:
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    managed_policy_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedPolicyArn' }})
    permission_set_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    
