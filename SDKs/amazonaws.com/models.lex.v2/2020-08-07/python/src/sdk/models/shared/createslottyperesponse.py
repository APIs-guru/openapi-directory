from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import slottypevalue
from . import slotvalueselectionsetting


@dataclass_json
@dataclass
class CreateSlotTypeResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    parent_slot_type_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentSlotTypeSignature' }})
    slot_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeId' }})
    slot_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeName' }})
    slot_type_values: Optional[List[slottypevalue.SlotTypeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeValues' }})
    value_selection_setting: Optional[slotvalueselectionsetting.SlotValueSelectionSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueSelectionSetting' }})
    
