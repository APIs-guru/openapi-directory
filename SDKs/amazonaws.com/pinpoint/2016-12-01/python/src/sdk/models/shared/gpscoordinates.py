from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GpsCoordinates:
    r"""GpsCoordinates
    Specifies the GPS coordinates of a location.
    """
    
    latitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Latitude') }})
    longitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Longitude') }})
    
