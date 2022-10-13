from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    

@dataclass
class GetTransactionsRequest:
    headers: GetTransactionsHeaders = field(default=None)
    request: shared.GetTransactionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTransactionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_transactions: Optional[shared.GetTransactions] = field(default=None)
    
