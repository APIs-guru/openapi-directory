from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3ProductsQueryParams:
    fields: Optional[List[shared.ProductFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3ProductsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ProductsRequest:
    headers: GetV3ProductsHeaders = field()
    query_params: GetV3ProductsQueryParams = field()
    

@dataclass
class GetV3ProductsResponse:
    content_type: str = field()
    status_code: int = field()
    products_result: Optional[shared.ProductsResult] = field(default=None)
    
