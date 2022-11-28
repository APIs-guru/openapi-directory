from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribedUser:
    r"""DescribedUser
    Describes the properties of a user that was specified.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    home_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectory') }})
    home_directory_mappings: Optional[List[HomeDirectoryMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryMappings') }})
    home_directory_type: Optional[HomeDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryType') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    posix_profile: Optional[PosixProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixProfile') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    ssh_public_keys: Optional[List[SSHPublicKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKeys') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
