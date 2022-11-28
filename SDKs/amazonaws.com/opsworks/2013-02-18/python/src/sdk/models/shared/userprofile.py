from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserProfile:
    r"""UserProfile
    Describes a user's SSH information.
    """
    
    allow_self_management: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowSelfManagement') }})
    iam_user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamUserArn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKey') }})
    ssh_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshUsername') }})
    
