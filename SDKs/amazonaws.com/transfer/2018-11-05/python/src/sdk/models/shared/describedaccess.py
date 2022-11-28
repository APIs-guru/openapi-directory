from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribedAccess:
    r"""DescribedAccess
    Describes the properties of the access that was specified.
    """
    
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    home_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectory') }})
    home_directory_mappings: Optional[List[HomeDirectoryMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryMappings') }})
    home_directory_type: Optional[HomeDirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeDirectoryType') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    posix_profile: Optional[PosixProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixProfile') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    
