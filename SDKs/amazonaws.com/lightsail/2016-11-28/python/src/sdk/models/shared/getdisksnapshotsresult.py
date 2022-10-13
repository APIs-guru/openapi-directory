from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import disksnapshot


@dataclass_json
@dataclass
class GetDiskSnapshotsResult:
    disk_snapshots: Optional[List[disksnapshot.DiskSnapshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSnapshots' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
