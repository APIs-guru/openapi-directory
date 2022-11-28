from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContactDetail:
    r"""ContactDetail
    ContactDetail includes the following elements.
    """
    
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressLine1') }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressLine2') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    contact_type: Optional[ContactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactType') }})
    country_code: Optional[CountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryCode') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    extra_params: Optional[List[ExtraParam]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraParams') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fax') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationName') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipCode') }})
    
