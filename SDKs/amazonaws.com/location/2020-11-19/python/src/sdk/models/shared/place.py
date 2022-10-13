from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import placegeometry


@dataclass_json
@dataclass
class Place:
    address_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressNumber' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    geometry: placegeometry.PlaceGeometry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    municipality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Municipality' }})
    neighborhood: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Neighborhood' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Street' }})
    sub_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubRegion' }})
    
