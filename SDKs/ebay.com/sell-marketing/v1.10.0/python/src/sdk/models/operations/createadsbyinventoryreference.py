from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAdsByInventoryReferencePathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateAdsByInventoryReferenceRequest:
    path_params: CreateAdsByInventoryReferencePathParams = field(default=None)
    request: shared.CreateAdsByInventoryReferenceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAdsByInventoryReferenceSecurity = field(default=None)
    

@dataclass
class CreateAdsByInventoryReferenceResponse:
    ad_references: Optional[shared.AdReferences] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
