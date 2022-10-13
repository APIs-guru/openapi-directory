from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class HomeRegionControl:
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlId' }})
    home_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    requested_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target: Optional[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
