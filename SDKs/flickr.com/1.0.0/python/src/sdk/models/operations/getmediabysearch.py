from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetMediaBySearchQueryParams:
    accuracy: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'accuracy', 'style': 'form', 'explode': True }})
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    bbox: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    contacts: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contacts', 'style': 'form', 'explode': True }})
    content_type: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'content_type', 'style': 'form', 'explode': True }})
    geo_context: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'geo_context', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    has_geo: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'has_geo', 'style': 'form', 'explode': True }})
    in_gallery: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'in_gallery', 'style': 'form', 'explode': True }})
    is_commons: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_commons', 'style': 'form', 'explode': True }})
    is_getty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_getty', 'style': 'form', 'explode': True }})
    lat: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    license: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    lon: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    machine_tag_mode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'machine_tag_mode', 'style': 'form', 'explode': True }})
    machine_tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'machine_tags', 'style': 'form', 'explode': True }})
    max_taken_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_taken_date', 'style': 'form', 'explode': True }})
    max_upload_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_upload_date', 'style': 'form', 'explode': True }})
    media: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'media', 'style': 'form', 'explode': True }})
    min_taken_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_taken_date', 'style': 'form', 'explode': True }})
    min_upload_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_upload_date', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    place_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'place_id', 'style': 'form', 'explode': True }})
    privacy_filter: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'privacy_filter', 'style': 'form', 'explode': True }})
    radius: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    radius_units: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'radius_units', 'style': 'form', 'explode': True }})
    safe_search: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'safe_search', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    woe_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'woe_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMediaBySearchRequest:
    query_params: GetMediaBySearchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetMediaBySearch200ApplicationJSON:
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    perpage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perpage' }})
    photos: Optional[List[shared.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetMediaBySearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_media_by_search_200_application_json_object: Optional[GetMediaBySearch200ApplicationJSON] = field(default=None)
    
