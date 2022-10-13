from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import disksnapshotinfo
from . import instancesnapshotinfo
from . import exportsnapshotrecordsourcetype_enum


@dataclass_json
@dataclass
class ExportSnapshotRecordSourceInfo:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk_snapshot_info: Optional[disksnapshotinfo.DiskSnapshotInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSnapshotInfo' }})
    from_resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromResourceArn' }})
    from_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromResourceName' }})
    instance_snapshot_info: Optional[instancesnapshotinfo.InstanceSnapshotInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceSnapshotInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[exportsnapshotrecordsourcetype_enum.ExportSnapshotRecordSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
