from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RecordMarkerDecisionAttributes:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    marker_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markerName' }})
    
