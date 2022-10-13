from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListAddressesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': True }})
    

@dataclass
class ListAddressesRequest:
    headers: ListAddressesHeaders = field(default=None)
    

@dataclass
class ListAddressesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_addresses: Optional[shared.ListAddresses] = field(default=None)
    
