from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTransactionsRequest:
    query_params: GetTransactionsQueryParams = field()
    security: GetTransactionsSecurity = field()
    

@dataclass
class GetTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    transactions: Optional[shared.Transactions] = field(default=None)
    
