from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegistrationRequest:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    marketing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketing') }})
    pin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    
