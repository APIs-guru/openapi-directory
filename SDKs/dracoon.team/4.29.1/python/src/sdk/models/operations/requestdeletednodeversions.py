from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestDeletedNodeVersionsPathParams:
    node_id: int = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDeletedNodeVersionsQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    type: str = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestDeletedNodeVersionsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDeletedNodeVersionsRequest:
    headers: RequestDeletedNodeVersionsHeaders = field()
    path_params: RequestDeletedNodeVersionsPathParams = field()
    query_params: RequestDeletedNodeVersionsQueryParams = field()
    

@dataclass
class RequestDeletedNodeVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    deleted_node_versions_list: Optional[shared.DeletedNodeVersionsList] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
