from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetFavoritesByPersonIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    max_fave_date: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_fave_date', 'style': 'form', 'explode': True }})
    min_fave_date: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_fave_date', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFavoritesByPersonIDRequest:
    query_params: GetFavoritesByPersonIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetFavoritesByPersonID200ApplicationJSON:
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    perpage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perpage' }})
    photos: Optional[List[shared.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetFavoritesByPersonIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_favorites_by_person_id_200_application_json_object: Optional[GetFavoritesByPersonID200ApplicationJSON] = field(default=None)
    
