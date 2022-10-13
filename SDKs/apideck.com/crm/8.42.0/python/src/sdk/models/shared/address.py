from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AddressTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    HOME = "home"
    OFFICE = "office"
    SHIPPING = "shipping"
    BILLING = "billing"
    OTHER = "other"


@dataclass_json
@dataclass
class Address:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_name' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line1' }})
    line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line2' }})
    line3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line3' }})
    line4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line4' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salutation' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    street_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_number' }})
    string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'string' }})
    type: Optional[AddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
