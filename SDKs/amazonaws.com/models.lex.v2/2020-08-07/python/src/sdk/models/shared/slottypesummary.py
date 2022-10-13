from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SlotTypeSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_slot_type_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentSlotTypeSignature' }})
    slot_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeId' }})
    slot_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeName' }})
    
