from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Dealer:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_source' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inventory_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_url' }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    location_ll: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_ll' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    seller_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_email' }})
    seller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_name' }})
    seller_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_phone' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
