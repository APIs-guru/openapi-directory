from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteSQLInjectionMatchSetRequest:
    r"""DeleteSQLInjectionMatchSetRequest
    A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
    """
    
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    sql_injection_match_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSetId') }})
    
