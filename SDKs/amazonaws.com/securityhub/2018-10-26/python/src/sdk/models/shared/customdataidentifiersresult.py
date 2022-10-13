from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdataidentifiersdetections


@dataclass_json
@dataclass
class CustomDataIdentifiersResult:
    detections: Optional[List[customdataidentifiersdetections.CustomDataIdentifiersDetections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Detections' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
