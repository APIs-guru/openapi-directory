from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import disksnapshot


@dataclass_json
@dataclass
class GetDiskSnapshotResult:
    disk_snapshot: Optional[disksnapshot.DiskSnapshot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSnapshot' }})
    
