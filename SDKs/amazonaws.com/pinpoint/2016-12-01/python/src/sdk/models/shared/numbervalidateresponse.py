from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NumberValidateResponse:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Carrier' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    cleansed_phone_number_e164: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CleansedPhoneNumberE164' }})
    cleansed_phone_number_national: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CleansedPhoneNumberNational' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    country_code_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountryCodeIso2' }})
    country_code_numeric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountryCodeNumeric' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'County' }})
    original_country_code_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginalCountryCodeIso2' }})
    original_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginalPhoneNumber' }})
    phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneType' }})
    phone_type_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneTypeCode' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipCode' }})
    
