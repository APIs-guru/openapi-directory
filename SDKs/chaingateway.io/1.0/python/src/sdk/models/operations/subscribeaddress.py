from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeAddressHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    

@dataclass
class SubscribeAddressRequest:
    headers: SubscribeAddressHeaders = field(default=None)
    request: shared.SubscribeAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscribeAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscribe_address: Optional[shared.SubscribeAddress] = field(default=None)
    
