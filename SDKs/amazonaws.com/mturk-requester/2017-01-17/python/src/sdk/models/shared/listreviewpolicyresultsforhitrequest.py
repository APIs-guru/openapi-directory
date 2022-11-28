from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReviewPolicyResultsForHitRequest:
    hit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    policy_levels: Optional[List[ReviewPolicyLevelEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyLevels') }})
    retrieve_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetrieveActions') }})
    retrieve_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetrieveResults') }})
    
