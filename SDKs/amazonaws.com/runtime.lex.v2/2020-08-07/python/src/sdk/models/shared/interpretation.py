from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import intent
from . import confidencescore
from . import sentimentresponse


@dataclass_json
@dataclass
class Interpretation:
    intent: Optional[intent.Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    nlu_confidence: Optional[confidencescore.ConfidenceScore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluConfidence' }})
    sentiment_response: Optional[sentimentresponse.SentimentResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentResponse' }})
    
