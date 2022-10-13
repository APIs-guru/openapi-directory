from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SentimentResponse:
    sentiment_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentLabel' }})
    sentiment_score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentScore' }})
    
