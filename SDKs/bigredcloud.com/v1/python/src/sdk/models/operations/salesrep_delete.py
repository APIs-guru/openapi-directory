from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SalesRepDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesRepDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SalesRepDeleteRequest:
    path_params: SalesRepDeletePathParams = field()
    query_params: SalesRepDeleteQueryParams = field()
    

@dataclass
class SalesRepDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    sales_rep_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
