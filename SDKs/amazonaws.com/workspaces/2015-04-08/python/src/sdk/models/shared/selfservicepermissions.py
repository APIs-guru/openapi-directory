from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reconnectenum_enum
from . import reconnectenum_enum
from . import reconnectenum_enum
from . import reconnectenum_enum
from . import reconnectenum_enum


@dataclass_json
@dataclass
class SelfservicePermissions:
    change_compute_type: Optional[reconnectenum_enum.ReconnectEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeComputeType' }})
    increase_volume_size: Optional[reconnectenum_enum.ReconnectEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncreaseVolumeSize' }})
    rebuild_workspace: Optional[reconnectenum_enum.ReconnectEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RebuildWorkspace' }})
    restart_workspace: Optional[reconnectenum_enum.ReconnectEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestartWorkspace' }})
    switch_running_mode: Optional[reconnectenum_enum.ReconnectEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SwitchRunningMode' }})
    
