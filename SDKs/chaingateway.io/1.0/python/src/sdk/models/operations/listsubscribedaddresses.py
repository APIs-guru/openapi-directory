from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListSubscribedAddressesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSubscribedAddressesRequest:
    headers: ListSubscribedAddressesHeaders = field()
    

@dataclass
class ListSubscribedAddressesResponse:
    content_type: str = field()
    status_code: int = field()
    list_subscribed_addresses: Optional[shared.ListSubscribedAddresses] = field(default=None)
    
