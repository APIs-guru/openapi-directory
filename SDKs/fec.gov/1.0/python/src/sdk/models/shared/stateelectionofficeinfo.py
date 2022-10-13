from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StateElectionOfficeInfo:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax_number' }})
    mailing_address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_address1' }})
    mailing_address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_address2' }})
    mailing_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_city' }})
    mailing_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_state' }})
    mailing_zipcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_zipcode' }})
    office_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'office_name' }})
    office_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'office_type' }})
    primary_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_phone_number' }})
    secondary_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary_phone_number' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_full_name' }})
    website_url1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website_url1' }})
    website_url2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website_url2' }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip_code' }})
    
