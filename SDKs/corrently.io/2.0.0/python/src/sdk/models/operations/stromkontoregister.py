from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StromkontoRegisterRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    zipcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipcode') }})
    

@dataclass
class StromkontoRegisterRequest:
    request: StromkontoRegisterRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StromkontoRegisterResponse:
    content_type: str = field()
    status_code: int = field()
    
