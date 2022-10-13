from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GpsCoordinates:
    latitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Latitude' }})
    longitude: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Longitude' }})
    
