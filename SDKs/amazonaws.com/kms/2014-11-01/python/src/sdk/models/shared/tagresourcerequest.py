from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagResourceRequest:
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
