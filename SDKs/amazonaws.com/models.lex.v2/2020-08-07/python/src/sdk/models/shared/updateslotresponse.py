from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import multiplevaluessetting
from . import obfuscationsetting
from . import slotvalueelicitationsetting


@dataclass_json
@dataclass
class UpdateSlotResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentId' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    multiple_values_setting: Optional[multiplevaluessetting.MultipleValuesSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipleValuesSetting' }})
    obfuscation_setting: Optional[obfuscationsetting.ObfuscationSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscationSetting' }})
    slot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotId' }})
    slot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotName' }})
    slot_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeId' }})
    value_elicitation_setting: Optional[slotvalueelicitationsetting.SlotValueElicitationSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueElicitationSetting' }})
    
