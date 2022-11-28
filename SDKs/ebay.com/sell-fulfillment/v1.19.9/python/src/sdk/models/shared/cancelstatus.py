from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CancelStatus:
    r"""CancelStatus
    This type contains information about any requests that have been made to cancel an order.
    """
    
    cancel_requests: Optional[List[CancelRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequests') }})
    cancel_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelState') }})
    cancelled_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelledDate') }})
    
