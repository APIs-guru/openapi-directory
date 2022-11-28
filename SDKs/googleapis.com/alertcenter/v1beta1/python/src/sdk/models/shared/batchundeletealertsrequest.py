from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchUndeleteAlertsRequest:
    r"""BatchUndeleteAlertsRequest
    A request to perform batch undelete on alerts.
    """
    
    alert_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertId') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    
