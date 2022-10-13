from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GetSyndicatedCommentsFormatEnum(str, Enum):
    XML = "xml"
    RSS = "rss"
    RSS2 = "rss2"
    ATOM = "atom"
    ATOM1 = "atom1"
    JSON = "json"
    JSON1 = "json1"


@dataclass
class GetSyndicatedCommentsPathParams:
    format: GetSyndicatedCommentsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSyndicatedCommentsQueryParams:
    account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    account_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'accountName', 'style': 'form', 'explode': True }})
    video_channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoChannelId', 'style': 'form', 'explode': True }})
    video_channel_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoChannelName', 'style': 'form', 'explode': True }})
    video_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSyndicatedCommentsRequest:
    path_params: GetSyndicatedCommentsPathParams = field(default=None)
    query_params: GetSyndicatedCommentsQueryParams = field(default=None)
    

@dataclass
class GetSyndicatedCommentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_syndicated_comments_204_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
