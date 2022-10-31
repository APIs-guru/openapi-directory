from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAddressHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAddressRequest:
    headers: DeleteAddressHeaders = field(default=None)
    request: shared.DeleteAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_address: Optional[shared.DeleteAddress] = field(default=None)
    
