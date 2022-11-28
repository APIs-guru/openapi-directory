from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAssignmentResponse:
    assignment: Optional[Assignment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assignment') }})
    hit: Optional[Hit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HIT') }})
    
