from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAddressHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAddressRequest:
    headers: DeleteAddressHeaders = field()
    request: shared.DeleteAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteAddressResponse:
    content_type: str = field()
    status_code: int = field()
    delete_address: Optional[shared.DeleteAddress] = field(default=None)
    
