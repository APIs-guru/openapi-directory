from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SentimentResponse:
    r"""SentimentResponse
    <p>Provides information about the sentiment expressed in a user's response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html\"> Determine Sentiment </a> in the <i>Amazon Comprehend developer guide</i>.</p>
    """
    
    sentiment: Optional[SentimentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    sentiment_score: Optional[SentimentScore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentScore') }})
    
