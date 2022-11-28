from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductsGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_product_dto_: Optional[shared.PageResultProductDto] = field(default=None)
    
