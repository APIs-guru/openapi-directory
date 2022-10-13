from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import regioninfo
from . import replicationsetstatus_enum


@dataclass_json
@dataclass
class ReplicationSet:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    created_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletion_protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletionProtected' }})
    last_modified_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedBy' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    region_map: dict[str, regioninfo.RegionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionMap' }})
    status: replicationsetstatus_enum.ReplicationSetStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
