from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListDownloadShareSubscriptionsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDownloadShareSubscriptionsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class ListDownloadShareSubscriptionsRequest:
    query_params: ListDownloadShareSubscriptionsQueryParams = field(default=None)
    headers: ListDownloadShareSubscriptionsHeaders = field(default=None)
    

@dataclass
class ListDownloadShareSubscriptionsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    subscribed_download_share_list: Optional[shared.SubscribedDownloadShareList] = field(default=None)
    
