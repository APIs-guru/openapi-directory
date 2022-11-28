from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AnalysisCategoriesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_analysis_category_dto_: Optional[shared.PageResultAnalysisCategoryDto] = field(default=None)
    
