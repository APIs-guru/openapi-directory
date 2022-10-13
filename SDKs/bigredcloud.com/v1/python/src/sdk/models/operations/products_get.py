from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductsGetResponse:
    content_type: str = field(default=None)
    page_result_product_dto_: Optional[shared.PageResultProductDto] = field(default=None)
    status_code: int = field(default=None)
    
