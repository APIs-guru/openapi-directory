from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkDeleteAdsByListingIDPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkDeleteAdsByListingIDSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkDeleteAdsByListingIDRequest:
    path_params: BulkDeleteAdsByListingIDPathParams = field()
    request: shared.BulkDeleteAdRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkDeleteAdsByListingIDSecurity = field()
    

@dataclass
class BulkDeleteAdsByListingIDResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_delete_ad_response: Optional[shared.BulkDeleteAdResponse] = field(default=None)
    
