from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import startshotdetectionfilter
from . import starttechnicalcuedetectionfilter


@dataclass_json
@dataclass
class StartSegmentDetectionFilters:
    shot_filter: Optional[startshotdetectionfilter.StartShotDetectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShotFilter' }})
    technical_cue_filter: Optional[starttechnicalcuedetectionfilter.StartTechnicalCueDetectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TechnicalCueFilter' }})
    
