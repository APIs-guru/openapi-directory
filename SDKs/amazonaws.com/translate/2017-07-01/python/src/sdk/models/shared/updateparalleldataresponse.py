from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import paralleldatastatus_enum
from . import paralleldatastatus_enum


@dataclass_json
@dataclass
class UpdateParallelDataResponse:
    latest_update_attempt_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestUpdateAttemptAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_update_attempt_status: Optional[paralleldatastatus_enum.ParallelDataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestUpdateAttemptStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[paralleldatastatus_enum.ParallelDataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
