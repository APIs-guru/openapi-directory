from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import summarizedcounter


@dataclass_json
@dataclass
class SummarizedAttackVector:
    vector_counters: Optional[List[summarizedcounter.SummarizedCounter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VectorCounters' }})
    vector_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VectorType' }})
    
