from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategoriesAllPathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CategoriesAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CategoriesAllRequest:
    path_params: CategoriesAllPathParams = field(default=None)
    query_params: CategoriesAllQueryParams = field(default=None)
    

@dataclass
class CategoriesAllResponse:
    content_type: str = field(default=None)
    get_categories_response: Optional[shared.GetCategoriesResponse] = field(default=None)
    status_code: int = field(default=None)
    
