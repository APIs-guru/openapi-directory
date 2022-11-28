from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JSONWebToken:
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    created_on: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn') }})
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    
