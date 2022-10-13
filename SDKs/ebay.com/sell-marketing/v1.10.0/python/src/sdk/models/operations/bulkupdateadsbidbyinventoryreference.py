from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkUpdateAdsBidByInventoryReferencePathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkUpdateAdsBidByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkUpdateAdsBidByInventoryReferenceRequest:
    path_params: BulkUpdateAdsBidByInventoryReferencePathParams = field(default=None)
    request: shared.BulkCreateAdsByInventoryReferenceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BulkUpdateAdsBidByInventoryReferenceSecurity = field(default=None)
    

@dataclass
class BulkUpdateAdsBidByInventoryReferenceResponse:
    bulk_create_ads_by_inventory_reference_response: Optional[shared.BulkCreateAdsByInventoryReferenceResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
