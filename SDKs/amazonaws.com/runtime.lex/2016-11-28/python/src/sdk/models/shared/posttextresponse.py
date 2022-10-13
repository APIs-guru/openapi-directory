from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import activecontext
from . import predictedintent
from . import dialogstate_enum
from . import messageformattype_enum
from . import intentconfidence
from . import responsecard
from . import sentimentresponse


@dataclass_json
@dataclass
class PostTextResponse:
    active_contexts: Optional[List[activecontext.ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeContexts' }})
    alternative_intents: Optional[List[predictedintent.PredictedIntent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternativeIntents' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    dialog_state: Optional[dialogstate_enum.DialogStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogState' }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    message_format: Optional[messageformattype_enum.MessageFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageFormat' }})
    nlu_intent_confidence: Optional[intentconfidence.IntentConfidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidence' }})
    response_card: Optional[responsecard.ResponseCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    sentiment_response: Optional[sentimentresponse.SentimentResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentResponse' }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionAttributes' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotToElicit' }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    
