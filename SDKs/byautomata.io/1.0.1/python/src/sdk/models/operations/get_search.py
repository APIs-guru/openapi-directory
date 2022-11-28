from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSearchQueryParams:
    terms: str = field(metadata={'query_param': { 'field_name': 'terms', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSearch200ApplicationJSON:
    calls_per_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls_per_month') }})
    companies: Optional[List[shared.SimilarCompanySearch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companies') }})
    count_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_remaining') }})
    renewal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal_date') }})
    

@dataclass
class GetSearchRequest:
    query_params: GetSearchQueryParams = field()
    

@dataclass
class GetSearchResponse:
    content_type: str = field()
    status_code: int = field()
    get_search_200_application_json_object: Optional[GetSearch200ApplicationJSON] = field(default=None)
    
