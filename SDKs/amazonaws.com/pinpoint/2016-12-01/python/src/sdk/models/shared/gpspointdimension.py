from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gpscoordinates


@dataclass_json
@dataclass
class GpsPointDimension:
    coordinates: gpscoordinates.GpsCoordinates = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Coordinates' }})
    range_in_kilometers: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RangeInKilometers' }})
    
