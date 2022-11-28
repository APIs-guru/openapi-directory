from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class SearchCodeSortEnum(str, Enum):
    INDEXED = "indexed"


@dataclass
class SearchCodeQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[SearchCodeSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SearchCode200ApplicationJSON:
    incomplete_results: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: List[shared.CodeSearchResultItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclass
class SearchCode503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class SearchCodeRequest:
    query_params: SearchCodeQueryParams = field()
    

@dataclass
class SearchCodeResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    search_code_200_application_json_object: Optional[SearchCode200ApplicationJSON] = field(default=None)
    search_code_503_application_json_object: Optional[SearchCode503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
