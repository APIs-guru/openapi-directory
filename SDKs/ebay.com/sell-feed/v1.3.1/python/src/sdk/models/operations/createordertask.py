from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateOrderTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOrderTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateOrderTaskRequest:
    headers: CreateOrderTaskHeaders = field(default=None)
    request: shared.CreateOrderTaskRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateOrderTaskSecurity = field(default=None)
    

@dataclass
class CreateOrderTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
