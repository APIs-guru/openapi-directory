from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Address:
    r"""Address
    The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
    """
    
    address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Company') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    is_restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRestricted') }})
    landmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Landmark') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    prefecture_or_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrefectureOrDistrict') }})
    state_or_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateOrProvince') }})
    street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Street1') }})
    street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Street2') }})
    street3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Street3') }})
    
