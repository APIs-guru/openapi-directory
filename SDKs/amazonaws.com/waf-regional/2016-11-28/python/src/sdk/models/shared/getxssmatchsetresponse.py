from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetXSSMatchSetResponse:
    r"""GetXSSMatchSetResponse
    The response to a <a>GetXssMatchSet</a> request.
    """
    
    xss_match_set: Optional[XSSMatchSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSet') }})
    
