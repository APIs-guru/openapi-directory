from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListAddressesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAddressesRequest:
    headers: ListAddressesHeaders = field()
    

@dataclass
class ListAddressesResponse:
    content_type: str = field()
    status_code: int = field()
    list_addresses: Optional[shared.ListAddresses] = field(default=None)
    
