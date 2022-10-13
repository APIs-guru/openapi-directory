from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FundingSource:
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
