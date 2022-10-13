from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class BulkCreateAdsByListingIDPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkCreateAdsByListingIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkCreateAdsByListingIDRequest:
    path_params: BulkCreateAdsByListingIDPathParams = field(default=None)
    request: shared.BulkCreateAdRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BulkCreateAdsByListingIDSecurity = field(default=None)
    

@dataclass
class BulkCreateAdsByListingIDResponse:
    bulk_ad_response: Optional[shared.BulkAdResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
