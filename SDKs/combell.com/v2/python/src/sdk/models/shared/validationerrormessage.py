from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidationErrorMessage:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    error_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_text') }})
    
