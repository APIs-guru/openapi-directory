from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CashPaymentsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashPaymentsDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class CashPaymentsDeleteRequest:
    path_params: CashPaymentsDeletePathParams = field()
    query_params: CashPaymentsDeleteQueryParams = field()
    

@dataclass
class CashPaymentsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    cash_payments_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
