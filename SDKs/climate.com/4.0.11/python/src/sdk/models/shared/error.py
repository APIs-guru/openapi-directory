from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorError:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class Error:
    error: Optional[ErrorError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
