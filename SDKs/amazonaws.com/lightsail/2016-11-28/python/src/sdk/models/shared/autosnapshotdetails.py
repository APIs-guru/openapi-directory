from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attacheddisk
from . import autosnapshotstatus_enum


@dataclass_json
@dataclass
class AutoSnapshotDetails:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    from_attached_disks: Optional[List[attacheddisk.AttachedDisk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromAttachedDisks' }})
    status: Optional[autosnapshotstatus_enum.AutoSnapshotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
