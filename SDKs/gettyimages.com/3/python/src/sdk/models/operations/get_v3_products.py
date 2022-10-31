from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3ProductsQueryParams:
    fields: Optional[List[shared.ProductFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3ProductsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ProductsRequest:
    query_params: GetV3ProductsQueryParams = field(default=None)
    headers: GetV3ProductsHeaders = field(default=None)
    

@dataclass
class GetV3ProductsResponse:
    content_type: str = field(default=None)
    products_result: Optional[shared.ProductsResult] = field(default=None)
    status_code: int = field(default=None)
    
