from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alert


@dataclass_json
@dataclass
class ListAlertsResponse:
    alerts: Optional[List[alert.Alert]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alerts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
