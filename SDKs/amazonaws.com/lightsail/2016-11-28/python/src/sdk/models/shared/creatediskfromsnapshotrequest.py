from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addonrequest
from . import tag


@dataclass_json
@dataclass
class CreateDiskFromSnapshotRequest:
    add_ons: Optional[List[addonrequest.AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOns' }})
    availability_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    disk_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskName' }})
    disk_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSnapshotName' }})
    restore_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreDate' }})
    size_in_gb: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInGb' }})
    source_disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDiskName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    use_latest_restorable_auto_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLatestRestorableAutoSnapshot' }})
    
