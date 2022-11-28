from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ScoreComponentRecommendationAction:
    r"""GoogleCloudApigeeV1ScoreComponentRecommendationAction
    Action to improve security score.
    """
    
    action_context: Optional[GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionContext') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
