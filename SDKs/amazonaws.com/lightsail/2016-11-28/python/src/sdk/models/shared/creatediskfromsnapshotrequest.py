from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDiskFromSnapshotRequest:
    availability_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    disk_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskName') }})
    size_in_gb: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInGb') }})
    add_ons: Optional[List[AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    disk_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSnapshotName') }})
    restore_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDate') }})
    source_disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDiskName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    use_latest_restorable_auto_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLatestRestorableAutoSnapshot') }})
    
