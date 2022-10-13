from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID' }})
    

@dataclass
class CreateTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTaskRequest:
    headers: CreateTaskHeaders = field(default=None)
    request: shared.CreateTaskRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTaskSecurity = field(default=None)
    

@dataclass
class CreateTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
