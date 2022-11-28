from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SentimentAnalysisSettings:
    r"""SentimentAnalysisSettings
    Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
    """
    
    detect_sentiment: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectSentiment') }})
    
