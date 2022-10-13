from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BonusPayment:
    assignment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentId' }})
    bonus_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BonusAmount' }})
    grant_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
