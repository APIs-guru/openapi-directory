from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import disk


@dataclass_json
@dataclass
class InstanceHardware:
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCount' }})
    disks: Optional[List[disk.Disk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ramSizeInGb' }})
    
