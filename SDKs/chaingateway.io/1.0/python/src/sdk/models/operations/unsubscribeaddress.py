from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnsubscribeAddressHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeAddressRequest:
    headers: UnsubscribeAddressHeaders = field()
    request: shared.UnsubscribeAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UnsubscribeAddressResponse:
    content_type: str = field()
    status_code: int = field()
    unsubscribe_address: Optional[shared.UnsubscribeAddress] = field(default=None)
    
