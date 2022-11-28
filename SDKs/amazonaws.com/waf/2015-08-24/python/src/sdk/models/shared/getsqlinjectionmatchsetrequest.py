from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetSQLInjectionMatchSetRequest:
    r"""GetSQLInjectionMatchSetRequest
    A request to get a <a>SqlInjectionMatchSet</a>.
    """
    
    sql_injection_match_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSetId') }})
    
