from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestUserAttributesPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserAttributesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestUserAttributesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserAttributesRequest:
    headers: RequestUserAttributesHeaders = field()
    path_params: RequestUserAttributesPathParams = field()
    query_params: RequestUserAttributesQueryParams = field()
    

@dataclass
class RequestUserAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    attributes_response: Optional[shared.AttributesResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
