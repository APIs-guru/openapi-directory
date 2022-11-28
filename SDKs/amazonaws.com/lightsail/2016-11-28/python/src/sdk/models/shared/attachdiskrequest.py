from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttachDiskRequest:
    disk_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskName') }})
    disk_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskPath') }})
    instance_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    
