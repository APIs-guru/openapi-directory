from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import destinationinfo
from . import resourcelocation
from . import resourcetype_enum
from . import exportsnapshotrecordsourceinfo
from . import recordstate_enum


@dataclass_json
@dataclass
class ExportSnapshotRecord:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_info: Optional[destinationinfo.DestinationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationInfo' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    source_info: Optional[exportsnapshotrecordsourceinfo.ExportSnapshotRecordSourceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceInfo' }})
    state: Optional[recordstate_enum.RecordStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
