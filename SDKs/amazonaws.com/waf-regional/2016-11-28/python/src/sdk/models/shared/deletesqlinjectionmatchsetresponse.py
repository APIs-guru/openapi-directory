from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteSQLInjectionMatchSetResponse:
    r"""DeleteSQLInjectionMatchSetResponse
    The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
    """
    
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    
