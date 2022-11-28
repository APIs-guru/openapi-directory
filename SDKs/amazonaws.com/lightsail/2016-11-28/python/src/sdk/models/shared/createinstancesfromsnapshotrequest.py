from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateInstancesFromSnapshotRequest:
    availability_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    bundle_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    instance_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    add_ons: Optional[List[AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    attached_disk_mapping: Optional[dict[str, List[DiskMap]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedDiskMapping') }})
    instance_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceSnapshotName') }})
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    key_pair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    restore_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDate') }})
    source_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceInstanceName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    use_latest_restorable_auto_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLatestRestorableAutoSnapshot') }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    
