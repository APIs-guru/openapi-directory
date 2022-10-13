from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateInventoryTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID' }})
    

@dataclass
class CreateInventoryTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateInventoryTaskRequest:
    headers: CreateInventoryTaskHeaders = field(default=None)
    request: shared.CreateInventoryTaskRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateInventoryTaskSecurity = field(default=None)
    

@dataclass
class CreateInventoryTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
