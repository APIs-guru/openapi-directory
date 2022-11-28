from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductsDeleteRequest:
    path_params: ProductsDeletePathParams = field()
    query_params: ProductsDeleteQueryParams = field()
    

@dataclass
class ProductsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    products_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
