from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAccessPoliciesResponse:
    r"""ListAccessPoliciesResponse
    A response to `ListAccessPoliciesRequest`.
    """
    
    access_policies: Optional[List[AccessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicies') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
