from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemRouting:
    destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    report_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportIndex' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    
