from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRegexPatternSetResponse:
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    regex_pattern_set: Optional[RegexPatternSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexPatternSet') }})
    
