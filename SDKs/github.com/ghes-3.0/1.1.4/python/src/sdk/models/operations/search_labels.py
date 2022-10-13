from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class SearchLabelsSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"


@dataclass
class SearchLabelsQueryParams:
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    repository_id: int = field(default=None, metadata={'query_param': { 'field_name': 'repository_id', 'style': 'form', 'explode': True }})
    sort: Optional[SearchLabelsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchLabelsRequest:
    query_params: SearchLabelsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SearchLabels200ApplicationJSON:
    incomplete_results: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incomplete_results' }})
    items: List[shared.LabelSearchResultItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class SearchLabelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    search_labels_200_application_json_object: Optional[SearchLabels200ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
