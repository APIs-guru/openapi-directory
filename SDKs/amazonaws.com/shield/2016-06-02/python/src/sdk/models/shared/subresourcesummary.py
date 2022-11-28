from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubResourceSummary:
    r"""SubResourceSummary
    The attack information for the specified SubResource.
    """
    
    attack_vectors: Optional[List[SummarizedAttackVector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackVectors') }})
    counters: Optional[List[SummarizedCounter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Counters') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    type: Optional[SubResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
