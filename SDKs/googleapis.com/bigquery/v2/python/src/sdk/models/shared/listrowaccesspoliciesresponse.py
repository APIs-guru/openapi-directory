from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRowAccessPoliciesResponse:
    r"""ListRowAccessPoliciesResponse
    Response message for the ListRowAccessPolicies method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    row_access_policies: Optional[List[RowAccessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowAccessPolicies') }})
    
