from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateUserProfileRequest:
    iam_user_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamUserArn') }})
    allow_self_management: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowSelfManagement') }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKey') }})
    ssh_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshUsername') }})
    
