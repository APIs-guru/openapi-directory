from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext:
    r"""GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext
    Action context are all the relevant details for the action.
    """
    
    documentation_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationLink') }})
    
