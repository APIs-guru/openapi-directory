from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetHighlightsByCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHighlightsByCategoryQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    mixin: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHighlightsByCategoryRequest:
    path_params: GetHighlightsByCategoryPathParams = field()
    query_params: GetHighlightsByCategoryQueryParams = field()
    

@dataclass
class GetHighlightsByCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
