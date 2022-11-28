from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetGifsByIDQueryParams:
    ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetGifsByID200ApplicationJSON:
    data: Optional[List[shared.Gif]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    pagination: Optional[shared.Pagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass
class GetGifsByIDRequest:
    query_params: GetGifsByIDQueryParams = field()
    

@dataclass
class GetGifsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_gifs_by_id_200_application_json_object: Optional[GetGifsByID200ApplicationJSON] = field(default=None)
    
