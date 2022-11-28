from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NewAddressHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewAddressRequest:
    headers: NewAddressHeaders = field()
    request: shared.NewAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NewAddressResponse:
    content_type: str = field()
    status_code: int = field()
    new_address: Optional[shared.NewAddress] = field(default=None)
    
