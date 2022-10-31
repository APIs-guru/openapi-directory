from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEthereumBalanceHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEthereumBalanceRequest:
    headers: GetEthereumBalanceHeaders = field(default=None)
    request: shared.GetEthereumBalanceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEthereumBalanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_ethereum_balance: Optional[shared.GetEthereumBalance] = field(default=None)
    
