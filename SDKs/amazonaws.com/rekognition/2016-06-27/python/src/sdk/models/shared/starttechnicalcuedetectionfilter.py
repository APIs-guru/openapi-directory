from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import blackframe


@dataclass_json
@dataclass
class StartTechnicalCueDetectionFilter:
    black_frame: Optional[blackframe.BlackFrame] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlackFrame' }})
    min_segment_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinSegmentConfidence' }})
    
