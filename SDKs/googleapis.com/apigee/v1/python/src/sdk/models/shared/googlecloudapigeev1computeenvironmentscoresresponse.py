from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ComputeEnvironmentScoresResponse:
    r"""GoogleCloudApigeeV1ComputeEnvironmentScoresResponse
    Response for ComputeEnvironmentScores.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    scores: Optional[List[GoogleCloudApigeeV1Score]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scores') }})
    
