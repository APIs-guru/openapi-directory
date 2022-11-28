from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TechnicalCueSegment:
    r"""TechnicalCueSegment
    Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    type: Optional[TechnicalCueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
