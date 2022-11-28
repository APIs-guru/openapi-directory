from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategoriesOnePathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CategoriesOneRequest:
    path_params: CategoriesOnePathParams = field()
    

@dataclass
class CategoriesOneResponse:
    content_type: str = field()
    status_code: int = field()
    get_category_response: Optional[shared.GetCategoryResponse] = field(default=None)
    
