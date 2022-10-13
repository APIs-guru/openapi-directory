from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import summarizedattackvector
from . import summarizedcounter
from . import subresourcetype_enum


@dataclass_json
@dataclass
class SubResourceSummary:
    attack_vectors: Optional[List[summarizedattackvector.SummarizedAttackVector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackVectors' }})
    counters: Optional[List[summarizedcounter.SummarizedCounter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Counters' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    type: Optional[subresourcetype_enum.SubResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
