from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NumberValidateResponse:
    r"""NumberValidateResponse
    Provides information about a phone number.
    """
    
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Carrier') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    cleansed_phone_number_e164: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CleansedPhoneNumberE164') }})
    cleansed_phone_number_national: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CleansedPhoneNumberNational') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    country_code_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryCodeIso2') }})
    country_code_numeric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryCodeNumeric') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('County') }})
    original_country_code_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginalCountryCodeIso2') }})
    original_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginalPhoneNumber') }})
    phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneType') }})
    phone_type_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneTypeCode') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipCode') }})
    
