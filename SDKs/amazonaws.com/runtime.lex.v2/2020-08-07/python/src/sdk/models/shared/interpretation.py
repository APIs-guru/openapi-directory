from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Interpretation:
    r"""Interpretation
    An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score. 
    """
    
    intent: Optional[Intent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    nlu_confidence: Optional[ConfidenceScore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluConfidence') }})
    sentiment_response: Optional[SentimentResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentResponse') }})
    
