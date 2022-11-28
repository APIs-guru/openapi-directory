from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductAPIAllQueryParams:
    query_options_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.page', 'style': 'form', 'explode': True }})
    query_options_page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductAPIAllHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductAPIAllRequest:
    headers: ProductAPIAllHeaders = field()
    query_params: ProductAPIAllQueryParams = field()
    

@dataclass
class ProductAPIAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    list_result_product_details_api_model_: Optional[shared.ListResultProductDetailsAPIModel] = field(default=None)
    
