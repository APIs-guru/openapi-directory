from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reviewstatus_enum


@dataclass_json
@dataclass
class ReviewInformation:
    reviewed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reviewer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reviewer' }})
    status: Optional[reviewstatus_enum.ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
