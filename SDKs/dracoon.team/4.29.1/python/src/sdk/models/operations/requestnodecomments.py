from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RequestNodeCommentsPathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestNodeCommentsQueryParams:
    hide_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hide_deleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestNodeCommentsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestNodeCommentsRequest:
    path_params: RequestNodeCommentsPathParams = field(default=None)
    query_params: RequestNodeCommentsQueryParams = field(default=None)
    headers: RequestNodeCommentsHeaders = field(default=None)
    

@dataclass
class RequestNodeCommentsResponse:
    comment_list: Optional[shared.CommentList] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
