from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SuppliersDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuppliersDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SuppliersDeleteRequest:
    path_params: SuppliersDeletePathParams = field(default=None)
    query_params: SuppliersDeleteQueryParams = field(default=None)
    

@dataclass
class SuppliersDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    suppliers_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
