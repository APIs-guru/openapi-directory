from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeAddressHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeAddressRequest:
    headers: SubscribeAddressHeaders = field()
    request: shared.SubscribeAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscribeAddressResponse:
    content_type: str = field()
    status_code: int = field()
    subscribe_address: Optional[shared.SubscribeAddress] = field(default=None)
    
