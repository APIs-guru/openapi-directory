from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OverageDetails:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    overages_reached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overages_reached' }})
    remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining' }})
    
