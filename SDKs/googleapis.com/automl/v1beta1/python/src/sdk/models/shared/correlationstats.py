from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CorrelationStats:
    cramers_v: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cramersV' }})
    
