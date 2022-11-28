from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CustomersDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class CustomersDeleteRequest:
    path_params: CustomersDeletePathParams = field()
    query_params: CustomersDeleteQueryParams = field()
    

@dataclass
class CustomersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    customers_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
