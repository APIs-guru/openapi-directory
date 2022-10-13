from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SalesRepDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesRepDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SalesRepDeleteRequest:
    path_params: SalesRepDeletePathParams = field(default=None)
    query_params: SalesRepDeleteQueryParams = field(default=None)
    

@dataclass
class SalesRepDeleteResponse:
    content_type: str = field(default=None)
    sales_rep_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
