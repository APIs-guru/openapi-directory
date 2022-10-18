from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaconversionevent


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListConversionEventsResponse:
    conversion_events: Optional[List[googleanalyticsadminv1alphaconversionevent.GoogleAnalyticsAdminV1alphaConversionEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionEvents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
