from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class SearchLabelsSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"


@dataclass
class SearchLabelsQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    repository_id: int = field(metadata={'query_param': { 'field_name': 'repository_id', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    sort: Optional[SearchLabelsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SearchLabels200ApplicationJSON:
    incomplete_results: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: List[shared.LabelSearchResultItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class SearchLabelsRequest:
    query_params: SearchLabelsQueryParams = field()
    

@dataclass
class SearchLabelsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    search_labels_200_application_json_object: Optional[SearchLabels200ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
