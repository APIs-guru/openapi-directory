from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3CustomersCurrentHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3CustomersCurrentRequest:
    headers: GetV3CustomersCurrentHeaders = field()
    

@dataclass
class GetV3CustomersCurrentResponse:
    content_type: str = field()
    status_code: int = field()
    customer_info_response: Optional[shared.CustomerInfoResponse] = field(default=None)
    
