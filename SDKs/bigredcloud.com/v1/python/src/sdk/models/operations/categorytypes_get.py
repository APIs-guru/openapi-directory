from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategoryTypesGetResponse:
    content_type: str = field(default=None)
    page_result_category_type_dto_: Optional[shared.PageResultCategoryTypeDto] = field(default=None)
    status_code: int = field(default=None)
    
