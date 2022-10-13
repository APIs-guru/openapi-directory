from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import updateerror
from . import updatestatus_enum


@dataclass_json
@dataclass
class LastUpdate:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[updateerror.UpdateError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    status: Optional[updatestatus_enum.UpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
