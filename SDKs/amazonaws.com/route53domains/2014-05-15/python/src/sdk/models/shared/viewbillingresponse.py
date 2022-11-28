from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ViewBillingResponse:
    r"""ViewBillingResponse
    The ViewBilling response includes the following elements.
    """
    
    billing_records: Optional[List[BillingRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingRecords') }})
    next_page_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageMarker') }})
    
