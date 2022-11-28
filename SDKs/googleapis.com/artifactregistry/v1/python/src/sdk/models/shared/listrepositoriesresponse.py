from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRepositoriesResponse:
    r"""ListRepositoriesResponse
    The response from listing repositories.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    repositories: Optional[List[Repository]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    
