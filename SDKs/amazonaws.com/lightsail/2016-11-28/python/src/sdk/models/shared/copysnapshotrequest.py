from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import regionname_enum


@dataclass_json
@dataclass
class CopySnapshotRequest:
    restore_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreDate' }})
    source_region: regionname_enum.RegionNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceRegion' }})
    source_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceResourceName' }})
    source_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSnapshotName' }})
    target_snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSnapshotName' }})
    use_latest_restorable_auto_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLatestRestorableAutoSnapshot' }})
    
