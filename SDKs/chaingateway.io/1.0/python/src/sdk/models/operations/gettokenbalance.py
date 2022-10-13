from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenBalanceHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    

@dataclass
class GetTokenBalanceRequest:
    headers: GetTokenBalanceHeaders = field(default=None)
    request: shared.GetTokenBalanceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTokenBalanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_token_balance: Optional[shared.GetTokenBalance] = field(default=None)
    
