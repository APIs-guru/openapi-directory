from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import textdetection


@dataclass_json
@dataclass
class DetectTextResponse:
    text_detections: Optional[List[textdetection.TextDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextDetections' }})
    text_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextModelVersion' }})
    
