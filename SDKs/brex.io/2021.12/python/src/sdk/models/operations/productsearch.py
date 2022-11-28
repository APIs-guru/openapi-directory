from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ProductSearchPathParams:
    subject_id: str = field(metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductSearchSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductSearchRequest:
    path_params: ProductSearchPathParams = field()
    security: ProductSearchSecurity = field()
    

@dataclass
class ProductSearchResponse:
    content_type: str = field()
    status_code: int = field()
    product_search_200_application_json_anies: Optional[List[Any]] = field(default=None)
    product_search_default_application_json_any: Optional[Any] = field(default=None)
    
