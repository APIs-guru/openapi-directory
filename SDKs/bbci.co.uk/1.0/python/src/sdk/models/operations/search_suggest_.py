from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SearchSuggestQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchSuggestRequest:
    query_params: SearchSuggestQueryParams = field()
    

@dataclass
class SearchSuggestResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
