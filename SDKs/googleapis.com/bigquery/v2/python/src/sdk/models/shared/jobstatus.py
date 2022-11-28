from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobStatus:
    error_result: Optional[ErrorProto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorResult') }})
    errors: Optional[List[ErrorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
