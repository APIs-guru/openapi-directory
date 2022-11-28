from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListRatePlansResponse:
    r"""GoogleCloudApigeeV1ListRatePlansResponse
    Response for ListRatePlans.
    """
    
    next_start_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextStartKey') }})
    rate_plans: Optional[List[GoogleCloudApigeeV1RatePlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratePlans') }})
    
