from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchUserActivityResponse:
    r"""SearchUserActivityResponse
    The response from `userActivity:get` call.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sample_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRate') }})
    sessions: Optional[List[UserActivitySession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    total_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRows') }})
    
