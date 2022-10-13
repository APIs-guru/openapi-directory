from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import historyevent


@dataclass_json
@dataclass
class History:
    events: List[historyevent.HistoryEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
