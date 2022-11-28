from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAdsByInventoryReferencePathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAdsByInventoryReferenceRequest:
    path_params: DeleteAdsByInventoryReferencePathParams = field()
    request: shared.DeleteAdsByInventoryReferenceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteAdsByInventoryReferenceSecurity = field()
    

@dataclass
class DeleteAdsByInventoryReferenceResponse:
    content_type: str = field()
    status_code: int = field()
    ad_ids: Optional[shared.AdIds] = field(default=None)
    
