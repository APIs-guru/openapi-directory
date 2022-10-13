from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdetection


@dataclass_json
@dataclass
class CustomDataIdentifiers:
    detections: Optional[List[customdetection.CustomDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detections' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
