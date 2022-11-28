from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEnrollmentTokensResponse:
    r"""ListEnrollmentTokensResponse
    Response to a request to list enrollment tokens for a given enterprise.
    """
    
    enrollment_tokens: Optional[List[EnrollmentToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentTokens') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
