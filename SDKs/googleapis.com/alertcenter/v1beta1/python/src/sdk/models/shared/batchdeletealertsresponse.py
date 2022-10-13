from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class BatchDeleteAlertsResponse:
    failed_alert_status: Optional[dict[str, status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedAlertStatus' }})
    success_alert_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successAlertIds' }})
    
