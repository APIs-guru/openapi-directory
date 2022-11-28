from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CopySnapshotRequest:
    source_region: RegionNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRegion') }})
    target_snapshot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSnapshotName') }})
    restore_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDate') }})
    source_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceResourceName') }})
    source_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSnapshotName') }})
    use_latest_restorable_auto_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLatestRestorableAutoSnapshot') }})
    
