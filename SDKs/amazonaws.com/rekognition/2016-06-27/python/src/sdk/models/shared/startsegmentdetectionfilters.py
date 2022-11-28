from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartSegmentDetectionFilters:
    r"""StartSegmentDetectionFilters
    Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>. 
    """
    
    shot_filter: Optional[StartShotDetectionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShotFilter') }})
    technical_cue_filter: Optional[StartTechnicalCueDetectionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechnicalCueFilter') }})
    
