from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphacustomdimension


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse:
    custom_dimensions: Optional[List[googleanalyticsadminv1alphacustomdimension.GoogleAnalyticsAdminV1alphaCustomDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDimensions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
