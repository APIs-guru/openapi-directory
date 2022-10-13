from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Address:
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressId' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Company' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    is_restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRestricted' }})
    landmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Landmark' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    prefecture_or_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrefectureOrDistrict' }})
    state_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateOrProvince' }})
    street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Street1' }})
    street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Street2' }})
    street3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Street3' }})
    
