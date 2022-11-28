from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetCategoriesQueryParams:
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoriesRequest:
    query_params: GetCategoriesQueryParams = field()
    

@dataclass
class GetCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
