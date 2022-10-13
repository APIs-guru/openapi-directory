from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetSyndicatedSubscriptionVideosFormatEnum(str, Enum):
    XML = "xml"
    RSS = "rss"
    RSS2 = "rss2"
    ATOM = "atom"
    ATOM1 = "atom1"
    JSON = "json"
    JSON1 = "json1"


@dataclass
class GetSyndicatedSubscriptionVideosPathParams:
    format: GetSyndicatedSubscriptionVideosFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSyndicatedSubscriptionVideosQueryParams:
    account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    filter: Optional[shared.FilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    nsfw: Optional[shared.NsfwEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nsfw', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSyndicatedSubscriptionVideosRequest:
    path_params: GetSyndicatedSubscriptionVideosPathParams = field(default=None)
    query_params: GetSyndicatedSubscriptionVideosQueryParams = field(default=None)
    

@dataclass
class GetSyndicatedSubscriptionVideosResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_syndicated_subscription_videos_204_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
