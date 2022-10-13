from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sensitivedatadetections


@dataclass_json
@dataclass
class SensitiveDataResult:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    detections: Optional[List[sensitivedatadetections.SensitiveDataDetections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Detections' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
