from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEthereumBalanceHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEthereumBalanceRequest:
    headers: GetEthereumBalanceHeaders = field()
    request: shared.GetEthereumBalanceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEthereumBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    get_ethereum_balance: Optional[shared.GetEthereumBalance] = field(default=None)
    
