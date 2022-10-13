from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExecuteTransactionPathParams:
    transactionid: str = field(default=None, metadata={'path_param': { 'field_name': 'transactionid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExecuteTransactionQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ExecuteTransactionRequest:
    path_params: ExecuteTransactionPathParams = field(default=None)
    query_params: ExecuteTransactionQueryParams = field(default=None)
    request: shared.ItvRokuTransactionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteTransactionResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
