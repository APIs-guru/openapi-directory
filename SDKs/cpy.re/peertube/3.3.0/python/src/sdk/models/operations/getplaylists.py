from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetPlaylistsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetPlaylists200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetPlaylistsRequest:
    query_params: GetPlaylistsQueryParams = field()
    

@dataclass
class GetPlaylistsResponse:
    content_type: str = field()
    status_code: int = field()
    get_playlists_200_application_json_object: Optional[GetPlaylists200ApplicationJSON] = field(default=None)
    
