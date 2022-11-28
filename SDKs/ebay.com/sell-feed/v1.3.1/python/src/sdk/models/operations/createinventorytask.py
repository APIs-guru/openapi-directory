from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateInventoryTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInventoryTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateInventoryTaskRequest:
    headers: CreateInventoryTaskHeaders = field()
    request: shared.CreateInventoryTaskRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateInventoryTaskSecurity = field()
    

@dataclass
class CreateInventoryTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
