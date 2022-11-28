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
class ExportSnapshotRecordSourceInfo:
    r"""ExportSnapshotRecordSourceInfo
    Describes the source of an export snapshot record.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk_snapshot_info: Optional[DiskSnapshotInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSnapshotInfo') }})
    from_resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromResourceArn') }})
    from_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromResourceName') }})
    instance_snapshot_info: Optional[InstanceSnapshotInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceSnapshotInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[ExportSnapshotRecordSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
