from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkDeleteAdsByInventoryReferencePathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkDeleteAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkDeleteAdsByInventoryReferenceRequest:
    path_params: BulkDeleteAdsByInventoryReferencePathParams = field(default=None)
    request: shared.BulkDeleteAdsByInventoryReferenceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BulkDeleteAdsByInventoryReferenceSecurity = field(default=None)
    

@dataclass
class BulkDeleteAdsByInventoryReferenceResponse:
    bulk_delete_ads_by_inventory_reference_response: Optional[shared.BulkDeleteAdsByInventoryReferenceResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
