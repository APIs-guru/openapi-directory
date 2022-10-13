from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1RevenueShareRange:
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    share_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharePercentage' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
