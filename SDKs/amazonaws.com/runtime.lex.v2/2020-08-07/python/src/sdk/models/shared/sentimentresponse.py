from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sentimenttype_enum
from . import sentimentscore


@dataclass_json
@dataclass
class SentimentResponse:
    sentiment: Optional[sentimenttype_enum.SentimentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiment' }})
    sentiment_score: Optional[sentimentscore.SentimentScore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentScore' }})
    
