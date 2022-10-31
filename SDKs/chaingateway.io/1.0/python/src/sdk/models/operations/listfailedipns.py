from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListFailedIPNsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFailedIPNsRequest:
    headers: ListFailedIPNsHeaders = field(default=None)
    

@dataclass
class ListFailedIPNsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_failed_ip_ns: Optional[shared.ListFailedIPNs] = field(default=None)
    
