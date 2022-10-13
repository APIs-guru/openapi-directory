from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAccountsNameVideoChannelsPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsNameVideoChannelsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    with_stats: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withStats', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsNameVideoChannelsRequest:
    path_params: GetAccountsNameVideoChannelsPathParams = field(default=None)
    query_params: GetAccountsNameVideoChannelsQueryParams = field(default=None)
    

@dataclass
class GetAccountsNameVideoChannelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_channel_list: Optional[Any] = field(default=None)
    
