from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BytesRange:
    from_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
