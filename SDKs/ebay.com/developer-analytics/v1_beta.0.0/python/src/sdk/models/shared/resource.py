from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rate


@dataclass_json
@dataclass
class Resource:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rates: Optional[List[rate.Rate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rates' }})
    
