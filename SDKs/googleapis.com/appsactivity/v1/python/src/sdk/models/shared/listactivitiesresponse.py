from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListActivitiesResponse:
    r"""ListActivitiesResponse
    The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
    """
    
    activities: Optional[List[Activity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
