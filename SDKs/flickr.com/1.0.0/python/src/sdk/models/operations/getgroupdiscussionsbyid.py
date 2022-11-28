from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetGroupDiscussionsByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetGroupDiscussionsByID200ApplicationJSON:
    iconfarm: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconfarm') }})
    iconserver: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconserver') }})
    ispoolmoderated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ispoolmoderated') }})
    lang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lang') }})
    members: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    per_page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    privacy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    topics: Optional[List[shared.Topic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetGroupDiscussionsByIDRequest:
    query_params: GetGroupDiscussionsByIDQueryParams = field()
    

@dataclass
class GetGroupDiscussionsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_group_discussions_by_id_200_application_json_object: Optional[GetGroupDiscussionsByID200ApplicationJSON] = field(default=None)
    
