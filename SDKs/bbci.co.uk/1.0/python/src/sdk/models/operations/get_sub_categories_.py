from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSubCategoriesPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubCategoriesQueryParams:
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubCategoriesRequest:
    path_params: GetSubCategoriesPathParams = field()
    query_params: GetSubCategoriesQueryParams = field()
    

@dataclass
class GetSubCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
