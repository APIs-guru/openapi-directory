from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductCatalogPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductCatalogSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductCatalogRequest:
    path_params: ProductCatalogPathParams = field(default=None)
    security: ProductCatalogSecurity = field(default=None)
    

@dataclass
class ProductCatalogResponse:
    content_type: str = field(default=None)
    product_catalog_200_application_json_any: Optional[Any] = field(default=None)
    product_catalog_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
