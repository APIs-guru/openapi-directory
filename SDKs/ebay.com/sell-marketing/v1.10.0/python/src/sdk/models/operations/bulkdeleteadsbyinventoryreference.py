from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkDeleteAdsByInventoryReferencePathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkDeleteAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkDeleteAdsByInventoryReferenceRequest:
    path_params: BulkDeleteAdsByInventoryReferencePathParams = field()
    request: shared.BulkDeleteAdsByInventoryReferenceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkDeleteAdsByInventoryReferenceSecurity = field()
    

@dataclass
class BulkDeleteAdsByInventoryReferenceResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_delete_ads_by_inventory_reference_response: Optional[shared.BulkDeleteAdsByInventoryReferenceResponse] = field(default=None)
    
