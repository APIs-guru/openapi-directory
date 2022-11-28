from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AirtravelMultilegRequest:
    api_key_l1: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey_l1') }})
    api_key_l2: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey_l2') }})
    contact_email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    contact_first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactFirstName') }})
    contact_last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactLastName') }})
    leg1: Leg1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg1') }})
    leg2: Leg1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg2') }})
    leg3: Leg1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg3') }})
    legs_count: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs_count') }})
    number_of_passengers: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_passengers') }})
    travel_mode: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('travel_mode') }})
    
