from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textdetection


@dataclass_json
@dataclass
class TextDetectionResult:
    text_detection: Optional[textdetection.TextDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextDetection' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
