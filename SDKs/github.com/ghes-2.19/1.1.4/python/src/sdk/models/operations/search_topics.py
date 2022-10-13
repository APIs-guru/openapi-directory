from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchTopicsQueryParams:
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchTopicsRequest:
    query_params: SearchTopicsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SearchTopics200ApplicationJSON:
    incomplete_results: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incomplete_results' }})
    items: List[shared.TopicSearchResultItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass_json
@dataclass
class SearchTopics415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SearchTopicsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    search_topics_200_application_json_object: Optional[SearchTopics200ApplicationJSON] = field(default=None)
    search_topics_415_application_json_object: Optional[SearchTopics415ApplicationJSON] = field(default=None)
    
