from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SummarizedAttackVector:
    r"""SummarizedAttackVector
    A summary of information about the attack.
    """
    
    vector_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VectorType') }})
    vector_counters: Optional[List[SummarizedCounter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VectorCounters') }})
    
