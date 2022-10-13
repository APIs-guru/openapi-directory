from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetPermissionRequest:
    allow_ssh: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowSsh' }})
    allow_sudo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowSudo' }})
    iam_user_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamUserArn' }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Level' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
