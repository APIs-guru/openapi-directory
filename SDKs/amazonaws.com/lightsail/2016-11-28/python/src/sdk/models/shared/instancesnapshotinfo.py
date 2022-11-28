from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceSnapshotInfo:
    r"""InstanceSnapshotInfo
    Describes an instance snapshot.
    """
    
    from_blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromBlueprintId') }})
    from_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromBundleId') }})
    from_disk_info: Optional[List[DiskInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDiskInfo') }})
    
