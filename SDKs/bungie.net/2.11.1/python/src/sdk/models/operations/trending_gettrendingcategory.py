from dataclasses import dataclass, field



@dataclass
class TrendingGetTrendingCategoryPathParams:
    category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    page_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pageNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrendingGetTrendingCategoryRequest:
    path_params: TrendingGetTrendingCategoryPathParams = field(default=None)
    

@dataclass
class TrendingGetTrendingCategoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
