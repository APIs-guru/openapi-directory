from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CriterionAdditionalProperties:
    eq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eq' }})
    eq_exact_match: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eqExactMatch' }})
    gt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gt' }})
    gte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gte' }})
    lt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lt' }})
    lte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lte' }})
    neq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neq' }})
    
