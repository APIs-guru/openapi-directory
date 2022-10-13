from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import opsitemidentity


@dataclass_json
@dataclass
class OpsItemEventSummary:
    created_by: Optional[opsitemidentity.OpsItemIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Detail' }})
    detail_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailType' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventId' }})
    ops_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemId' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
