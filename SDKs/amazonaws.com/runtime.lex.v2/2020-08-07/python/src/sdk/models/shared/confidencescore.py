from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfidenceScore:
    r"""ConfidenceScore
    Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent.
    """
    
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
