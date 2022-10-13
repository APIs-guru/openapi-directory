from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import intentconfidence


@dataclass_json
@dataclass
class PredictedIntent:
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    nlu_intent_confidence: Optional[intentconfidence.IntentConfidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidence' }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    
