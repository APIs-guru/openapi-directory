from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetPermissionRequest:
    iam_user_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamUserArn') }})
    stack_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    allow_ssh: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowSsh') }})
    allow_sudo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowSudo') }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Level') }})
    
