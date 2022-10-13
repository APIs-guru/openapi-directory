from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphadatastream


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListDataStreamsResponse:
    data_streams: Optional[List[googleanalyticsadminv1alphadatastream.GoogleAnalyticsAdminV1alphaDataStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataStreams' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
