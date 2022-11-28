from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FaceDetection:
    r"""FaceDetection
    Information about a face detected in a video analysis request and the time the face was detected in the video. 
    """
    
    face: Optional[FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
