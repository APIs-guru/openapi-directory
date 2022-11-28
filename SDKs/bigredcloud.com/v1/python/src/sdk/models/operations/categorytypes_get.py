from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategoryTypesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_category_type_dto_: Optional[shared.PageResultCategoryTypeDto] = field(default=None)
    
