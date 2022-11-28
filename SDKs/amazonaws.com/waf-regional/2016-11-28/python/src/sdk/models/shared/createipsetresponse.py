from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateIPSetResponse:
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    ip_set: Optional[IPSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPSet') }})
    
