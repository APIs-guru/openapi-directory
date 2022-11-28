from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductCatalogPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductCatalogSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductCatalogRequest:
    path_params: ProductCatalogPathParams = field()
    security: ProductCatalogSecurity = field()
    

@dataclass
class ProductCatalogResponse:
    content_type: str = field()
    status_code: int = field()
    product_catalog_200_application_json_any: Optional[Any] = field(default=None)
    product_catalog_default_application_json_any: Optional[Any] = field(default=None)
    
