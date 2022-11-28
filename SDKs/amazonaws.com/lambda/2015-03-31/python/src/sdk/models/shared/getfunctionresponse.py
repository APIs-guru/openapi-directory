from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFunctionResponse:
    code: Optional[FunctionCodeLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    concurrency: Optional[Concurrency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Concurrency') }})
    configuration: Optional[FunctionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
