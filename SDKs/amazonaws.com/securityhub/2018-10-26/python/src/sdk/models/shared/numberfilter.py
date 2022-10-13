from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NumberFilter:
    eq: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Eq' }})
    gte: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gte' }})
    lte: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lte' }})
    
