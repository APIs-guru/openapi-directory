from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategoriesOnePathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CategoriesOneRequest:
    path_params: CategoriesOnePathParams = field(default=None)
    

@dataclass
class CategoriesOneResponse:
    content_type: str = field(default=None)
    get_category_response: Optional[shared.GetCategoryResponse] = field(default=None)
    status_code: int = field(default=None)
    
