from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSlotResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentId') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    multiple_values_setting: Optional[MultipleValuesSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleValuesSetting') }})
    obfuscation_setting: Optional[ObfuscationSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscationSetting') }})
    slot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotId') }})
    slot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotName') }})
    slot_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeId') }})
    value_elicitation_setting: Optional[SlotValueElicitationSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueElicitationSetting') }})
    
