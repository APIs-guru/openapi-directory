from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostTextResponse:
    active_contexts: Optional[List[ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeContexts') }})
    alternative_intents: Optional[List[PredictedIntent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeIntents') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    dialog_state: Optional[DialogStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogState') }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    message_format: Optional[MessageFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    nlu_intent_confidence: Optional[IntentConfidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidence') }})
    response_card: Optional[ResponseCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    sentiment_response: Optional[SentimentResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentResponse') }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAttributes') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    
