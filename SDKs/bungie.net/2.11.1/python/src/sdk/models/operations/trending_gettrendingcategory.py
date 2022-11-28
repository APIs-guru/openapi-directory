from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TrendingGetTrendingCategoryPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    page_number: int = field(metadata={'path_param': { 'field_name': 'pageNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrendingGetTrendingCategoryRequest:
    path_params: TrendingGetTrendingCategoryPathParams = field()
    

@dataclass
class TrendingGetTrendingCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
