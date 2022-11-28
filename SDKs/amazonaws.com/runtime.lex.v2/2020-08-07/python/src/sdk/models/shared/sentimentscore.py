from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SentimentScore:
    r"""SentimentScore
    The individual sentiment responses for the utterance.
    """
    
    mixed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixed') }})
    negative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negative') }})
    neutral: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neutral') }})
    positive: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positive') }})
    
