from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteAccountAssignmentRequest:
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    permission_set_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    principal_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalId') }})
    principal_type: PrincipalTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    target_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    target_type: TargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    
