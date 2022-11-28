from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendEthereumHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendEthereumRequest:
    headers: SendEthereumHeaders = field()
    request: shared.SendEthereumRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendEthereumResponse:
    content_type: str = field()
    status_code: int = field()
    send_ethereum: Optional[shared.SendEthereum] = field(default=None)
    
