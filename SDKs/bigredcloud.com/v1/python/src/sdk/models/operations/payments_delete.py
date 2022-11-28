from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PaymentsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PaymentsDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class PaymentsDeleteRequest:
    path_params: PaymentsDeletePathParams = field()
    query_params: PaymentsDeleteQueryParams = field()
    

@dataclass
class PaymentsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    payments_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
