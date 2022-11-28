from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeleteAlertsResponse:
    r"""BatchDeleteAlertsResponse
    Response to batch delete operation on alerts.
    """
    
    failed_alert_status: Optional[dict[str, Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedAlertStatus') }})
    success_alert_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlertIds') }})
    
