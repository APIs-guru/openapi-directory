from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetectionFilter:
    r"""DetectionFilter
    A set of parameters that allow you to filter out certain results from your returned results.
    """
    
    min_bounding_box_height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinBoundingBoxHeight') }})
    min_bounding_box_width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinBoundingBoxWidth') }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    
