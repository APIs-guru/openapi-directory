from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSQLInjectionMatchSetsResponse:
    r"""ListSQLInjectionMatchSetsResponse
    The response to a <a>ListSqlInjectionMatchSets</a> request.
    """
    
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    sql_injection_match_sets: Optional[List[SQLInjectionMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSets') }})
    
