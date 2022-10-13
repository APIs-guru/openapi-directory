from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchPathParams:
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchRequest:
    path_params: SearchPathParams = field(default=None)
    

@dataclass_json
@dataclass
class Search200ApplicationJSONResults:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Search200ApplicationJSON:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    results: Optional[List[Search200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class SearchResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    search_200_application_json_object: Optional[Search200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
