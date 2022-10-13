from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetSubCategoriesPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubCategoriesQueryParams:
    lang: shared.LangEnum = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubCategoriesRequest:
    path_params: GetSubCategoriesPathParams = field(default=None)
    query_params: GetSubCategoriesQueryParams = field(default=None)
    

@dataclass
class GetSubCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
