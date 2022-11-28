from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTechnicalCueDetectionFilter:
    r"""StartTechnicalCueDetectionFilter
    Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
    """
    
    black_frame: Optional[BlackFrame] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlackFrame') }})
    min_segment_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSegmentConfidence') }})
    
