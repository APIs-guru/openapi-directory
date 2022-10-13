from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BlackFrame:
    max_pixel_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxPixelThreshold' }})
    min_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCoveragePercentage' }})
    
