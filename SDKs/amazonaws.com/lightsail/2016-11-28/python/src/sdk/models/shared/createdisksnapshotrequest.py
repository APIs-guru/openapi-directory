from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDiskSnapshotRequest:
    disk_snapshot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSnapshotName') }})
    disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskName') }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
