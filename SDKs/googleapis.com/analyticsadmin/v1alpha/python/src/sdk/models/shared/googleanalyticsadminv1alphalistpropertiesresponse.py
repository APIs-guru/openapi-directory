from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaproperty


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListPropertiesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    properties: Optional[List[googleanalyticsadminv1alphaproperty.GoogleAnalyticsAdminV1alphaProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
