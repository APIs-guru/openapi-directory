from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetUsersMeSubscriptionsVideosQueryParams:
    category_one_of: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'categoryOneOf', 'style': 'form', 'explode': False }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    filter: Optional[shared.FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    is_live: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isLive', 'style': 'form', 'explode': True }})
    language_one_of: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'languageOneOf', 'style': 'form', 'explode': False }})
    licence_one_of: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'licenceOneOf', 'style': 'form', 'explode': False }})
    nsfw: Optional[shared.NsfwEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nsfw', 'style': 'form', 'explode': True }})
    skip_count: Optional[shared.SkipCountEnum] = field(default=None, metadata={'query_param': { 'field_name': 'skipCount', 'style': 'form', 'explode': True }})
    sort: Optional[shared.VideosSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tags_all_of: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'tagsAllOf', 'style': 'form', 'explode': False }})
    tags_one_of: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'tagsOneOf', 'style': 'form', 'explode': False }})
    

@dataclass
class GetUsersMeSubscriptionsVideosSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeSubscriptionsVideosRequest:
    query_params: GetUsersMeSubscriptionsVideosQueryParams = field()
    security: GetUsersMeSubscriptionsVideosSecurity = field()
    

@dataclass
class GetUsersMeSubscriptionsVideosResponse:
    content_type: str = field()
    status_code: int = field()
    video_list_response: Optional[Any] = field(default=None)
    
