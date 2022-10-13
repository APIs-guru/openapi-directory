from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BucketCriteriaAdditionalProperties:
    eq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eq' }})
    gt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gt' }})
    gte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gte' }})
    lt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lt' }})
    lte: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lte' }})
    neq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neq' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
