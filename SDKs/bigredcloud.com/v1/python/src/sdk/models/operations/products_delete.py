from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductsDeleteRequest:
    path_params: ProductsDeletePathParams = field(default=None)
    query_params: ProductsDeleteQueryParams = field(default=None)
    

@dataclass
class ProductsDeleteResponse:
    content_type: str = field(default=None)
    products_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
