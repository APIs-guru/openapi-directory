from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OpsEntityItem:
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureTime' }})
    content: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    
