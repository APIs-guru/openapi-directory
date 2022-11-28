from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BlackFrame:
    r"""BlackFrame
     A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats, and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for. For more information, see <a>StartSegmentDetection</a>. 
    """
    
    max_pixel_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPixelThreshold') }})
    min_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCoveragePercentage') }})
    
