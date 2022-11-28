from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionSummaryQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionSummarySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTransactionSummaryRequest:
    query_params: GetTransactionSummaryQueryParams = field()
    security: GetTransactionSummarySecurity = field()
    

@dataclass
class GetTransactionSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    transaction_summary_response: Optional[shared.TransactionSummaryResponse] = field(default=None)
    
