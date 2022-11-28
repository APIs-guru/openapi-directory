from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateIntentResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dialog_code_hook: Optional[DialogCodeHookSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogCodeHook') }})
    fulfillment_code_hook: Optional[FulfillmentCodeHookSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentCodeHook') }})
    input_contexts: Optional[List[InputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContexts') }})
    intent_closing_setting: Optional[IntentClosingSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentClosingSetting') }})
    intent_confirmation_setting: Optional[IntentConfirmationSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentConfirmationSetting') }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentId') }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    kendra_configuration: Optional[KendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraConfiguration') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    output_contexts: Optional[List[OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntentSignature') }})
    sample_utterances: Optional[List[SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    
