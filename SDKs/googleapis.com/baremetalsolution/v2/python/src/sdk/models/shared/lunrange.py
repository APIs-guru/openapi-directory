from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LunRange:
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeGb' }})
    
