from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextDetectionResult:
    r"""TextDetectionResult
    Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
    """
    
    text_detection: Optional[TextDetection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextDetection') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
