from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ComputeEnvironmentScoresRequest:
    r"""GoogleCloudApigeeV1ComputeEnvironmentScoresRequest
    Request for ComputeEnvironmentScores.
    """
    
    filters: Optional[List[GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    time_range: Optional[GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    
