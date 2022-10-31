from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportAddressHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportAddressRequest:
    headers: ImportAddressHeaders = field(default=None)
    request: shared.ImportAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    import_address: Optional[shared.ImportAddress] = field(default=None)
    
