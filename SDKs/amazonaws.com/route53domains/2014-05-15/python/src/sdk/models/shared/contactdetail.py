from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contacttype_enum
from . import countrycode_enum
from . import extraparam


@dataclass_json
@dataclass
class ContactDetail:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    contact_type: Optional[contacttype_enum.ContactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactType' }})
    country_code: Optional[countrycode_enum.CountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountryCode' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    extra_params: Optional[List[extraparam.ExtraParam]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraParams' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fax' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationName' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipCode' }})
    
