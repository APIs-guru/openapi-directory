from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetContentproSearchQueryParams:
    terms: str = field(metadata={'query_param': { 'field_name': 'terms', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetContentproSearch200ApplicationJSONData:
    article: Optional[shared.Article] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article') }})
    company: Optional[shared.ContentProCompany] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    snippets: Optional[shared.ContentProSnippets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippets') }})
    

@dataclass_json
@dataclass
class GetContentproSearch200ApplicationJSON:
    calls_per_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls_per_month') }})
    count_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_remaining') }})
    data: Optional[List[GetContentproSearch200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    renewal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal_date') }})
    

@dataclass
class GetContentproSearchRequest:
    query_params: GetContentproSearchQueryParams = field()
    

@dataclass
class GetContentproSearchResponse:
    content_type: str = field()
    status_code: int = field()
    get_contentpro_search_200_application_json_object: Optional[GetContentproSearch200ApplicationJSON] = field(default=None)
    
