from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdsByInventoryReferencePathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdsByInventoryReferenceQueryParams:
    inventory_reference_id: str = field(default=None, metadata={'query_param': { 'field_name': 'inventory_reference_id', 'style': 'form', 'explode': True }})
    inventory_reference_type: str = field(default=None, metadata={'query_param': { 'field_name': 'inventory_reference_type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdsByInventoryReferenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAdsByInventoryReferenceRequest:
    path_params: GetAdsByInventoryReferencePathParams = field(default=None)
    query_params: GetAdsByInventoryReferenceQueryParams = field(default=None)
    security: GetAdsByInventoryReferenceSecurity = field(default=None)
    

@dataclass
class GetAdsByInventoryReferenceResponse:
    ads: Optional[shared.Ads] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
