from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetachManagedPolicyFromPermissionSetRequest:
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    managed_policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedPolicyArn') }})
    permission_set_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    
