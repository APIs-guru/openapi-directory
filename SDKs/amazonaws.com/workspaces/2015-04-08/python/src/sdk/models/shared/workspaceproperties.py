from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkspaceProperties:
    r"""WorkspaceProperties
    Describes a WorkSpace.
    """
    
    compute_type_name: Optional[ComputeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeTypeName') }})
    root_volume_size_gib: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootVolumeSizeGib') }})
    running_mode: Optional[RunningModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningMode') }})
    running_mode_auto_stop_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningModeAutoStopTimeoutInMinutes') }})
    user_volume_size_gib: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserVolumeSizeGib') }})
    
