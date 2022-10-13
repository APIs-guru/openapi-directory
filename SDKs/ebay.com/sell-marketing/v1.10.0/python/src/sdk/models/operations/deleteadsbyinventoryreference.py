from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAdsByInventoryReferencePathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAdsByInventoryReferenceRequest:
    path_params: DeleteAdsByInventoryReferencePathParams = field(default=None)
    request: shared.DeleteAdsByInventoryReferenceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteAdsByInventoryReferenceSecurity = field(default=None)
    

@dataclass
class DeleteAdsByInventoryReferenceResponse:
    ad_ids: Optional[shared.AdIds] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
