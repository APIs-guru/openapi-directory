from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recencydimension


@dataclass_json
@dataclass
class SegmentBehaviors:
    recency: Optional[recencydimension.RecencyDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recency' }})
    
