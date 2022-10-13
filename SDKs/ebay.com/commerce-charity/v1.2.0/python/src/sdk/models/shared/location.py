from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address
from . import geocoordinates


@dataclass_json
@dataclass
class Location:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    geo_coordinates: Optional[geocoordinates.GeoCoordinates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoCoordinates' }})
    
