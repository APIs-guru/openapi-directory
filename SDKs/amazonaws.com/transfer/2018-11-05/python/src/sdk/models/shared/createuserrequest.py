from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserRequest:
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    home_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectory') }})
    home_directory_mappings: Optional[List[HomeDirectoryMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryMappings') }})
    home_directory_type: Optional[HomeDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryType') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    posix_profile: Optional[PosixProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixProfile') }})
    ssh_public_key_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKeyBody') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
