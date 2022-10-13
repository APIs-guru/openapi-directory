from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import setdimension
from . import gpspointdimension


@dataclass_json
@dataclass
class SegmentLocation:
    country: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    gps_point: Optional[gpspointdimension.GpsPointDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GPSPoint' }})
    
