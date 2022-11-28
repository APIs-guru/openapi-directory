from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategoriesAllPathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CategoriesAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CategoriesAllRequest:
    path_params: CategoriesAllPathParams = field()
    query_params: CategoriesAllQueryParams = field()
    

@dataclass
class CategoriesAllResponse:
    content_type: str = field()
    status_code: int = field()
    get_categories_response: Optional[shared.GetCategoriesResponse] = field(default=None)
    
