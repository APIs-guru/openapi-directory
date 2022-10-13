from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FaultStatistics:
    other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCount' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
