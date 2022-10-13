from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetSyndicatedVideosFormatEnum(str, Enum):
    XML = "xml"
    RSS = "rss"
    RSS2 = "rss2"
    ATOM = "atom"
    ATOM1 = "atom1"
    JSON = "json"
    JSON1 = "json1"


@dataclass
class GetSyndicatedVideosPathParams:
    format: GetSyndicatedVideosFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSyndicatedVideosQueryParams:
    account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    account_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'accountName', 'style': 'form', 'explode': True }})
    filter: Optional[shared.FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    nsfw: Optional[shared.NsfwEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nsfw', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    video_channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoChannelId', 'style': 'form', 'explode': True }})
    video_channel_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoChannelName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSyndicatedVideosRequest:
    path_params: GetSyndicatedVideosPathParams = field(default=None)
    query_params: GetSyndicatedVideosQueryParams = field(default=None)
    

@dataclass
class GetSyndicatedVideosResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_syndicated_videos_204_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
