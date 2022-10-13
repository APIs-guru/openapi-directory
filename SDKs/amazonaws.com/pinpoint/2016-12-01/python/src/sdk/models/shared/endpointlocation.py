from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointLocation:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Longitude' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    
