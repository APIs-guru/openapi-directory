from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisionPermissionSetRequest:
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    permission_set_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    target_type: ProvisionTargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    
