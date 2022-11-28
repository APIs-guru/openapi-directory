from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLinkedAdUnitsResponse:
    r"""ListLinkedAdUnitsResponse
    Response definition for the ad units linked to a custom channel list rpc.
    """
    
    ad_units: Optional[List[AdUnit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adUnits') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
