from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StateModelGet:
    by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'by' }})
    since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'since', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
