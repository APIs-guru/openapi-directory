from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportAddressHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportAddressRequest:
    headers: ExportAddressHeaders = field(default=None)
    request: shared.ExportAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExportAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_address: Optional[shared.ExportAddress] = field(default=None)
    
