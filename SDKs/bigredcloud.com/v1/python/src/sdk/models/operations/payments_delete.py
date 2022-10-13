from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PaymentsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PaymentsDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class PaymentsDeleteRequest:
    path_params: PaymentsDeletePathParams = field(default=None)
    query_params: PaymentsDeleteQueryParams = field(default=None)
    

@dataclass
class PaymentsDeleteResponse:
    content_type: str = field(default=None)
    payments_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
