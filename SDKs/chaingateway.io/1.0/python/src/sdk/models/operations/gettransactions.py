from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsRequest:
    headers: GetTransactionsHeaders = field()
    request: shared.GetTransactionsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_transactions: Optional[shared.GetTransactions] = field(default=None)
    
