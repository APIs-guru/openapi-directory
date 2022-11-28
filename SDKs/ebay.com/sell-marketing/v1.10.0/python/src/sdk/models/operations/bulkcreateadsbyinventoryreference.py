from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkCreateAdsByInventoryReferencePathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkCreateAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkCreateAdsByInventoryReferenceRequest:
    path_params: BulkCreateAdsByInventoryReferencePathParams = field()
    request: shared.BulkCreateAdsByInventoryReferenceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkCreateAdsByInventoryReferenceSecurity = field()
    

@dataclass
class BulkCreateAdsByInventoryReferenceResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_create_ads_by_inventory_reference_response: Optional[shared.BulkCreateAdsByInventoryReferenceResponse] = field(default=None)
    
