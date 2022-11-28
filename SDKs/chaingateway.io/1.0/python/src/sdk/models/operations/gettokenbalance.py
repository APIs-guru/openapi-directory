from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenBalanceHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenBalanceRequest:
    headers: GetTokenBalanceHeaders = field()
    request: shared.GetTokenBalanceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTokenBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    get_token_balance: Optional[shared.GetTokenBalance] = field(default=None)
    
