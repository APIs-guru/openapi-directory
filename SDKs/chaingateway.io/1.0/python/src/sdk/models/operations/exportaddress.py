from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportAddressHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportAddressRequest:
    headers: ExportAddressHeaders = field()
    request: shared.ExportAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExportAddressResponse:
    content_type: str = field()
    status_code: int = field()
    export_address: Optional[shared.ExportAddress] = field(default=None)
    
