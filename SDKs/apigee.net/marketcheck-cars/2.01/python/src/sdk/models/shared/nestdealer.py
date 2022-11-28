from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NestDealer:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    dealer_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealer_type') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    seller_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller_email') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
