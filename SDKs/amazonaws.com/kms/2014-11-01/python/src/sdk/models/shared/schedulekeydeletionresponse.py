from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keystate_enum


@dataclass_json
@dataclass
class ScheduleKeyDeletionResponse:
    deletion_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_state: Optional[keystate_enum.KeyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyState' }})
    pending_window_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingWindowInDays' }})
    
