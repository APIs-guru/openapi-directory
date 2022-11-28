from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ScoreComponentRecommendation:
    r"""GoogleCloudApigeeV1ScoreComponentRecommendation
    Recommendation based on security concerns and score.
    """
    
    actions: Optional[List[GoogleCloudApigeeV1ScoreComponentRecommendationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
