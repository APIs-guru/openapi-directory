from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListFailedIPNsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFailedIPNsRequest:
    headers: ListFailedIPNsHeaders = field()
    

@dataclass
class ListFailedIPNsResponse:
    content_type: str = field()
    status_code: int = field()
    list_failed_ip_ns: Optional[shared.ListFailedIPNs] = field(default=None)
    
