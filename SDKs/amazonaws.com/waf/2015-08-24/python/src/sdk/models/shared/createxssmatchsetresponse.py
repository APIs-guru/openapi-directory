from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateXSSMatchSetResponse:
    r"""CreateXSSMatchSetResponse
    The response to a <code>CreateXssMatchSet</code> request.
    """
    
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    xss_match_set: Optional[XSSMatchSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSet') }})
    
