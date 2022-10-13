from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compute_enum
from . import runningmode_enum


@dataclass_json
@dataclass
class WorkspaceProperties:
    compute_type_name: Optional[compute_enum.ComputeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeTypeName' }})
    root_volume_size_gib: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootVolumeSizeGib' }})
    running_mode: Optional[runningmode_enum.RunningModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunningMode' }})
    running_mode_auto_stop_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunningModeAutoStopTimeoutInMinutes' }})
    user_volume_size_gib: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserVolumeSizeGib' }})
    
