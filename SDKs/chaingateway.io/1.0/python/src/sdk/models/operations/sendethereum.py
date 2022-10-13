from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendEthereumHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    

@dataclass
class SendEthereumRequest:
    headers: SendEthereumHeaders = field(default=None)
    request: shared.SendEthereumRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendEthereumResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    send_ethereum: Optional[shared.SendEthereum] = field(default=None)
    
