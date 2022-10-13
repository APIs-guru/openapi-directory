from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class BulkDeleteAdsByListingIDPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkDeleteAdsByListingIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkDeleteAdsByListingIDRequest:
    path_params: BulkDeleteAdsByListingIDPathParams = field(default=None)
    request: shared.BulkDeleteAdRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BulkDeleteAdsByListingIDSecurity = field(default=None)
    

@dataclass
class BulkDeleteAdsByListingIDResponse:
    bulk_delete_ad_response: Optional[shared.BulkDeleteAdResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
