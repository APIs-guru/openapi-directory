from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ClearAddressHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClearAddressRequest:
    headers: ClearAddressHeaders = field(default=None)
    request: shared.ClearAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClearAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    clear_address: Optional[shared.ClearAddress] = field(default=None)
    
