from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PosixProfile:
    r"""PosixProfile
    The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
    """
    
    gid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    uid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    secondary_gids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryGids') }})
    
