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
class UpdateSQLInjectionMatchSetRequest:
    r"""UpdateSQLInjectionMatchSetRequest
    A request to update a <a>SqlInjectionMatchSet</a>.
    """
    
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    sql_injection_match_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSetId') }})
    updates: List[SQLInjectionMatchSetUpdate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
