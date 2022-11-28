from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AntiSpam:
    allowed_types: Optional[List[AntiSpamTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_types') }})
    type: Optional[AntiSpamTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
