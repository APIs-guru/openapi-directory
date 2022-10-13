from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnsubscribeAddressHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    

@dataclass
class UnsubscribeAddressRequest:
    headers: UnsubscribeAddressHeaders = field(default=None)
    request: shared.UnsubscribeAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UnsubscribeAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unsubscribe_address: Optional[shared.UnsubscribeAddress] = field(default=None)
    
