from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPoliciesResponse:
    r"""ListPoliciesResponse
    Response to a request to list policies for a given enterprise.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policies: Optional[List[Policy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
