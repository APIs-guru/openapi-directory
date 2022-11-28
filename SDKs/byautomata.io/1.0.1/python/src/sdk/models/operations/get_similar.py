from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSimilarQueryParams:
    link: str = field(metadata={'query_param': { 'field_name': 'link', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSimilar200ApplicationJSON:
    calls_per_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls_per_month') }})
    companies: Optional[List[shared.SimilarCompany]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companies') }})
    count_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_remaining') }})
    input_company: Optional[shared.InputCompany] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input_company') }})
    renewal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal_date') }})
    

@dataclass
class GetSimilarRequest:
    query_params: GetSimilarQueryParams = field()
    

@dataclass
class GetSimilarResponse:
    content_type: str = field()
    status_code: int = field()
    get_similar_200_application_json_object: Optional[GetSimilar200ApplicationJSON] = field(default=None)
    
