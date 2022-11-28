from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetMediaByPersonIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    user_id: str = field(metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    content_type: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'content_type', 'style': 'form', 'explode': True }})
    max_taken_date: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_taken_date', 'style': 'form', 'explode': True }})
    max_upload_date: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_upload_date', 'style': 'form', 'explode': True }})
    min_taken_date: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_taken_date', 'style': 'form', 'explode': True }})
    min_upload_date: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_upload_date', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    privacy_filter: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'privacy_filter', 'style': 'form', 'explode': True }})
    safe_search: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'safe_search', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetMediaByPersonID200ApplicationJSON:
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    perpage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perpage') }})
    photos: Optional[List[shared.Photo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetMediaByPersonIDRequest:
    query_params: GetMediaByPersonIDQueryParams = field()
    

@dataclass
class GetMediaByPersonIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_media_by_person_id_200_application_json_object: Optional[GetMediaByPersonID200ApplicationJSON] = field(default=None)
    
