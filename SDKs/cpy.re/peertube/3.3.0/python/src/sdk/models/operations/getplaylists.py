from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetPlaylistsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlaylistsRequest:
    query_params: GetPlaylistsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPlaylists200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetPlaylistsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_playlists_200_application_json_object: Optional[GetPlaylists200ApplicationJSON] = field(default=None)
    
