from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ProductSearchPathParams:
    subject_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductSearchSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductSearchRequest:
    path_params: ProductSearchPathParams = field(default=None)
    security: ProductSearchSecurity = field(default=None)
    

@dataclass
class ProductSearchResponse:
    content_type: str = field(default=None)
    product_search_200_application_json_anies: Optional[List[Any]] = field(default=None)
    product_search_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
