from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3CustomersCurrentHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3CustomersCurrentRequest:
    headers: GetV3CustomersCurrentHeaders = field(default=None)
    

@dataclass
class GetV3CustomersCurrentResponse:
    content_type: str = field(default=None)
    customer_info_response: Optional[shared.CustomerInfoResponse] = field(default=None)
    status_code: int = field(default=None)
    
