from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import phone


@dataclass_json
@dataclass
class ReturnAddress:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    primary_phone: Optional[phone.Phone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    state_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateOrProvince' }})
    
