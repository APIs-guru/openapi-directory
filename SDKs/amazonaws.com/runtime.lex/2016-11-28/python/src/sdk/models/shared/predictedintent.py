from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredictedIntent:
    r"""PredictedIntent
    An intent that Amazon Lex suggests satisfies the user's intent. Includes the name of the intent, the confidence that Amazon Lex has that the user's intent is satisfied, and the slots defined for the intent.
    """
    
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    nlu_intent_confidence: Optional[IntentConfidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidence') }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    
