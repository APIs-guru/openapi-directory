from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SentimentAnalysisSettings:
    detect_sentiment: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectSentiment' }})
    
