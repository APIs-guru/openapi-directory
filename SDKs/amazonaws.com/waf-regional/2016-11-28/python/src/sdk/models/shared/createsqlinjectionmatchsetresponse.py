from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSQLInjectionMatchSetResponse:
    r"""CreateSQLInjectionMatchSetResponse
    The response to a <code>CreateSqlInjectionMatchSet</code> request.
    """
    
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    sql_injection_match_set: Optional[SQLInjectionMatchSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSet') }})
    
