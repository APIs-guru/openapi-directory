from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionSummaryQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionSummarySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTransactionSummaryRequest:
    query_params: GetTransactionSummaryQueryParams = field(default=None)
    security: GetTransactionSummarySecurity = field(default=None)
    

@dataclass
class GetTransactionSummaryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    transaction_summary_response: Optional[shared.TransactionSummaryResponse] = field(default=None)
    
