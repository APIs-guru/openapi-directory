from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTaskRequest:
    headers: CreateTaskHeaders = field()
    request: shared.CreateTaskRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTaskSecurity = field()
    

@dataclass
class CreateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
