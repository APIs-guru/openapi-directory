from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GpsPointDimension:
    r"""GpsPointDimension
    Specifies GPS-based criteria for including or excluding endpoints from a segment.
    """
    
    coordinates: GpsCoordinates = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Coordinates') }})
    range_in_kilometers: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangeInKilometers') }})
    
