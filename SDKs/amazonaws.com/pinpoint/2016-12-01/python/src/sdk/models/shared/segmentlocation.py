from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentLocation:
    r"""SegmentLocation
    Specifies geographical dimension settings for a segment.
    """
    
    country: Optional[SetDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    gps_point: Optional[GpsPointDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GPSPoint') }})
    
