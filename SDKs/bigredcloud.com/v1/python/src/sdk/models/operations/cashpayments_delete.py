from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CashPaymentsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashPaymentsDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class CashPaymentsDeleteRequest:
    path_params: CashPaymentsDeletePathParams = field(default=None)
    query_params: CashPaymentsDeleteQueryParams = field(default=None)
    

@dataclass
class CashPaymentsDeleteResponse:
    cash_payments_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
