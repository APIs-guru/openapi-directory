from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationsummary


@dataclass_json
@dataclass
class ListNotificationsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    notification_summaries: Optional[List[notificationsummary.NotificationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationSummaries' }})
    
