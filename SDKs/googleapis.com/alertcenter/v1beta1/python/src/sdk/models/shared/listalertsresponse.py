from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAlertsResponse:
    r"""ListAlertsResponse
    Response message for an alert listing request.
    """
    
    alerts: Optional[List[Alert]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
