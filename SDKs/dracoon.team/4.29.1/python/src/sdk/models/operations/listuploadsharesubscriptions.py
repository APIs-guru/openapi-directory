from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListUploadShareSubscriptionsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUploadShareSubscriptionsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class ListUploadShareSubscriptionsRequest:
    query_params: ListUploadShareSubscriptionsQueryParams = field(default=None)
    headers: ListUploadShareSubscriptionsHeaders = field(default=None)
    

@dataclass
class ListUploadShareSubscriptionsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    subscribed_upload_share_list: Optional[shared.SubscribedUploadShareList] = field(default=None)
    
