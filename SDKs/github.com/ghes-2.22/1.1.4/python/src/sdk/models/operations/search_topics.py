from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SearchTopicsQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SearchTopics200ApplicationJSON:
    incomplete_results: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: List[shared.TopicSearchResultItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclass
class SearchTopics415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class SearchTopicsRequest:
    query_params: SearchTopicsQueryParams = field()
    

@dataclass
class SearchTopicsResponse:
    content_type: str = field()
    status_code: int = field()
    search_topics_200_application_json_object: Optional[SearchTopics200ApplicationJSON] = field(default=None)
    search_topics_415_application_json_object: Optional[SearchTopics415ApplicationJSON] = field(default=None)
    
