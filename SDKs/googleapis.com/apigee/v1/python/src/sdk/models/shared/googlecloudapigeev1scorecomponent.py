from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ScoreComponent:
    r"""GoogleCloudApigeeV1ScoreComponent
    Component is an individual security element that is scored.
    """
    
    calculate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculateTime') }})
    data_capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCaptureTime') }})
    drilldown_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drilldownPaths') }})
    recommendations: Optional[List[GoogleCloudApigeeV1ScoreComponentRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    score_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorePath') }})
    
