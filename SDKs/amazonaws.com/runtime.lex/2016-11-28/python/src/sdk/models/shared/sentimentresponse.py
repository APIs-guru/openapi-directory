from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SentimentResponse:
    r"""SentimentResponse
    <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>
    """
    
    sentiment_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentLabel') }})
    sentiment_score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentScore') }})
    
