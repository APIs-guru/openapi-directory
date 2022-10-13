from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoClickStreamHitLocationInfo:
    areacode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areacode' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    metrocode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrocode' }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    postalcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalcode' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionName' }})
    
