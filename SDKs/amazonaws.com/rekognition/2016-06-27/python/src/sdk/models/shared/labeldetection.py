from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelDetection:
    r"""LabelDetection
    Information about a label detected in a video analysis request and the time the label was detected in the video. 
    """
    
    label: Optional[Label] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
