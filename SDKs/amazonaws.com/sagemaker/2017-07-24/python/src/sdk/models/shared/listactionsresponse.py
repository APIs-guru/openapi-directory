from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListActionsResponse:
    action_summaries: Optional[List[ActionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
