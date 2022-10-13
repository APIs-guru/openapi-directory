from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dialogcodehooksettings
from . import fulfillmentcodehooksettings
from . import inputcontext
from . import intentclosingsetting
from . import intentconfirmationsetting
from . import kendraconfiguration
from . import outputcontext
from . import sampleutterance
from . import slotpriority


@dataclass_json
@dataclass
class UpdateIntentResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dialog_code_hook: Optional[dialogcodehooksettings.DialogCodeHookSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogCodeHook' }})
    fulfillment_code_hook: Optional[fulfillmentcodehooksettings.FulfillmentCodeHookSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentCodeHook' }})
    input_contexts: Optional[List[inputcontext.InputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputContexts' }})
    intent_closing_setting: Optional[intentclosingsetting.IntentClosingSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentClosingSetting' }})
    intent_confirmation_setting: Optional[intentconfirmationsetting.IntentConfirmationSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentConfirmationSetting' }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentId' }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    kendra_configuration: Optional[kendraconfiguration.KendraConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraConfiguration' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    output_contexts: Optional[List[outputcontext.OutputContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parent_intent_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIntentSignature' }})
    sample_utterances: Optional[List[sampleutterance.SampleUtterance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleUtterances' }})
    slot_priorities: Optional[List[slotpriority.SlotPriority]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotPriorities' }})
    
