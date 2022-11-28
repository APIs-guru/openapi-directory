from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAdUnitsResponse:
    r"""ListAdUnitsResponse
    Response for the ad units list request.
    """
    
    ad_units: Optional[List[AdUnit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adUnits') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
