from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetProgrammesAtoZSearchPathParams:
    letter: str = field(default=None, metadata={'path_param': { 'field_name': 'letter', 'style': 'simple', 'explode': False }})
    
class GetProgrammesAtoZSearchSortEnum(str, Enum):
    TITLE = "title"


@dataclass
class GetProgrammesAtoZSearchQueryParams:
    availability: shared.AvailabilityEnum = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    initial_child_count: int = field(default=None, metadata={'query_param': { 'field_name': 'initial_child_count', 'style': 'form', 'explode': True }})
    page: int = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: int = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(default=None, metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    sort: GetProgrammesAtoZSearchSortEnum = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: shared.SortDirectionEnum = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProgrammesAtoZSearchRequest:
    path_params: GetProgrammesAtoZSearchPathParams = field(default=None)
    query_params: GetProgrammesAtoZSearchQueryParams = field(default=None)
    

@dataclass
class GetProgrammesAtoZSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
