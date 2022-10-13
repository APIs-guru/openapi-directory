from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class SearchCodeSortEnum(str, Enum):
    INDEXED = "indexed"


@dataclass
class SearchCodeQueryParams:
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[SearchCodeSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchCodeRequest:
    query_params: SearchCodeQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SearchCode200ApplicationJSON:
    incomplete_results: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incomplete_results' }})
    items: List[shared.CodeSearchResultItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass_json
@dataclass
class SearchCode503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SearchCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    search_code_200_application_json_object: Optional[SearchCode200ApplicationJSON] = field(default=None)
    search_code_503_application_json_object: Optional[SearchCode503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
