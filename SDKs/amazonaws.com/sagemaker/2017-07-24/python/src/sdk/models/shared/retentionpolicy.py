from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RetentionPolicy:
    r"""RetentionPolicy
    The retention policy for data stored on an Amazon Elastic File System (EFS) volume.
    """
    
    home_efs_file_system: Optional[RetentionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeEfsFileSystem') }})
    
