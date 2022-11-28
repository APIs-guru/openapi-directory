from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectTextResponse:
    text_detections: Optional[List[TextDetection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextDetections') }})
    text_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextModelVersion') }})
    
