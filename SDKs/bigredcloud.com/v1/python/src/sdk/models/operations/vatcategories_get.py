from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VatCategoriesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_vat_category_dto_: Optional[shared.PageResultVatCategoryDto] = field(default=None)
    
