from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelationalDatabaseHardware:
    r"""RelationalDatabaseHardware
    Describes the hardware of a database.
    """
    
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    disk_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeInGb') }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramSizeInGb') }})
    
