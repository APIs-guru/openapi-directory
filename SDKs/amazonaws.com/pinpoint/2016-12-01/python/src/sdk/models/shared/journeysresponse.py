from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JourneysResponse:
    r"""JourneysResponse
    Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
    """
    
    item: List[JourneyResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
