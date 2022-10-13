from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reviewactionstatus_enum


@dataclass_json
@dataclass
class ReviewActionDetail:
    action_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionId' }})
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionName' }})
    complete_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompleteTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    status: Optional[reviewactionstatus_enum.ReviewActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    
