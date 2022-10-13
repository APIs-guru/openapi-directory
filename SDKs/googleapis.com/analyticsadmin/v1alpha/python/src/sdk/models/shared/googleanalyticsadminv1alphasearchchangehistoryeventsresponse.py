from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphachangehistoryevent


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse:
    change_history_events: Optional[List[googleanalyticsadminv1alphachangehistoryevent.GoogleAnalyticsAdminV1alphaChangeHistoryEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeHistoryEvents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
