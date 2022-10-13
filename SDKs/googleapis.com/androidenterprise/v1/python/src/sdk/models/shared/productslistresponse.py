from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pageinfo
from . import product
from . import tokenpagination


@dataclass_json
@dataclass
class ProductsListResponse:
    page_info: Optional[pageinfo.PageInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageInfo' }})
    product: Optional[List[product.Product]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    token_pagination: Optional[tokenpagination.TokenPagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenPagination' }})
    
