from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateByteMatchSetResponse:
    byte_match_set: Optional[ByteMatchSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByteMatchSet') }})
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    
