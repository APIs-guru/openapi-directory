from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NewAddressHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewAddressRequest:
    headers: NewAddressHeaders = field(default=None)
    request: shared.NewAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NewAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    new_address: Optional[shared.NewAddress] = field(default=None)
    
