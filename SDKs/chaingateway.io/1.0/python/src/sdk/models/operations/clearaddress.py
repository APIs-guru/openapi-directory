from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ClearAddressHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClearAddressRequest:
    headers: ClearAddressHeaders = field()
    request: shared.ClearAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClearAddressResponse:
    content_type: str = field()
    status_code: int = field()
    clear_address: Optional[shared.ClearAddress] = field(default=None)
    
