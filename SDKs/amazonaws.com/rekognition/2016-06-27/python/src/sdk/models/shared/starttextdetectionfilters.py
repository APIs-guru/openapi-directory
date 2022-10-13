from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionofinterest
from . import detectionfilter


@dataclass_json
@dataclass
class StartTextDetectionFilters:
    regions_of_interest: Optional[List[regionofinterest.RegionOfInterest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionsOfInterest' }})
    word_filter: Optional[detectionfilter.DetectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WordFilter' }})
    
