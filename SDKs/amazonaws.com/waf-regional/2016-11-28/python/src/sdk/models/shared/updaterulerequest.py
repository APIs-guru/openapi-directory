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
class UpdateRuleRequest:
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    updates: List[RuleUpdate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
