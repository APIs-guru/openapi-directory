from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import worldexportjobstatus_enum


@dataclass_json
@dataclass
class WorldExportJobSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[worldexportjobstatus_enum.WorldExportJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    worlds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worlds' }})
    
