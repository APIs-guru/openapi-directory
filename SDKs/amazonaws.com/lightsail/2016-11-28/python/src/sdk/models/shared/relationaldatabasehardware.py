from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelationalDatabaseHardware:
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCount' }})
    disk_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeInGb' }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ramSizeInGb' }})
    
