from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import diskinfo


@dataclass_json
@dataclass
class InstanceSnapshotInfo:
    from_blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromBlueprintId' }})
    from_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromBundleId' }})
    from_disk_info: Optional[List[diskinfo.DiskInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromDiskInfo' }})
    
