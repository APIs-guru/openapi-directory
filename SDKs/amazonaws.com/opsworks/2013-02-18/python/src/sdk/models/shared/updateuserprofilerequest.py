from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateUserProfileRequest:
    allow_self_management: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowSelfManagement' }})
    iam_user_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamUserArn' }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshPublicKey' }})
    ssh_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshUsername' }})
    
