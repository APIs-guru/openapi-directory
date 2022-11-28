from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAdsByInventoryReferencePathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAdsByInventoryReferenceRequest:
    path_params: CreateAdsByInventoryReferencePathParams = field()
    request: shared.CreateAdsByInventoryReferenceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAdsByInventoryReferenceSecurity = field()
    

@dataclass
class CreateAdsByInventoryReferenceResponse:
    content_type: str = field()
    status_code: int = field()
    ad_references: Optional[shared.AdReferences] = field(default=None)
    
