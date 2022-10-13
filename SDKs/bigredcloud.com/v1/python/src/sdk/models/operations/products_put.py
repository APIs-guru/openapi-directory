from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductsPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsPutRequest:
    path_params: ProductsPutPathParams = field(default=None)
    request: shared.ProductDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProductsPutResponse:
    content_type: str = field(default=None)
    products_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
