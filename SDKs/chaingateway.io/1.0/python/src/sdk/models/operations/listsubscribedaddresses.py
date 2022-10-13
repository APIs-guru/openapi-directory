from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListSubscribedAddressesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': True }})
    

@dataclass
class ListSubscribedAddressesRequest:
    headers: ListSubscribedAddressesHeaders = field(default=None)
    

@dataclass
class ListSubscribedAddressesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_subscribed_addresses: Optional[shared.ListSubscribedAddresses] = field(default=None)
    
