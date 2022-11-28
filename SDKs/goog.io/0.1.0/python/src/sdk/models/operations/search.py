from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SearchPathParams:
    query: str = field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class Search200ApplicationJSONResults:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class Search200ApplicationJSON:
    r"""Search200ApplicationJSON
    results
    """
    
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    results: Optional[List[Search200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class SearchRequest:
    path_params: SearchPathParams = field()
    

@dataclass
class SearchResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    search_200_application_json_object: Optional[Search200ApplicationJSON] = field(default=None)
    
