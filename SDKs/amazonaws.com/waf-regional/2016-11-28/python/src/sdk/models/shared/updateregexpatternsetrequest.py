from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRegexPatternSetRequest:
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    regex_pattern_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexPatternSetId') }})
    updates: List[RegexPatternSetUpdate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
