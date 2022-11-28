from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFeatureGroupsResponse:
    feature_group_summaries: List[FeatureGroupSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupSummaries') }})
    next_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
