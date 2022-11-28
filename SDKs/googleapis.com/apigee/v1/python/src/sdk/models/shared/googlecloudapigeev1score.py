from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Score:
    r"""GoogleCloudApigeeV1Score
    Represents Security Score.
    """
    
    component: Optional[GoogleCloudApigeeV1ScoreComponent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('component') }})
    subcomponents: Optional[List[GoogleCloudApigeeV1ScoreComponent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subcomponents') }})
    time_range: Optional[GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    
