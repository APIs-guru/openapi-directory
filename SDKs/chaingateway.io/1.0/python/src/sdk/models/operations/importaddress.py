from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportAddressHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportAddressRequest:
    headers: ImportAddressHeaders = field()
    request: shared.ImportAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportAddressResponse:
    content_type: str = field()
    status_code: int = field()
    import_address: Optional[shared.ImportAddress] = field(default=None)
    
