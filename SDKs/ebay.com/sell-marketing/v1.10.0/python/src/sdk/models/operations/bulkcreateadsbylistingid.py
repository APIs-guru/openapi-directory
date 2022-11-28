from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkCreateAdsByListingIDPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkCreateAdsByListingIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkCreateAdsByListingIDRequest:
    path_params: BulkCreateAdsByListingIDPathParams = field()
    request: shared.BulkCreateAdRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkCreateAdsByListingIDSecurity = field()
    

@dataclass
class BulkCreateAdsByListingIDResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_ad_response: Optional[shared.BulkAdResponse] = field(default=None)
    
