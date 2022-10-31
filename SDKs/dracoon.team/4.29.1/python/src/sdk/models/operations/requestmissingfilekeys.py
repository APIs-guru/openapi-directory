from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestMissingFileKeysQueryParams:
    file_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'file_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    room_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'room_id', 'style': 'form', 'explode': True }})
    use_key: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'use_key', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestMissingFileKeysHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestMissingFileKeysRequest:
    query_params: RequestMissingFileKeysQueryParams = field(default=None)
    headers: RequestMissingFileKeysHeaders = field(default=None)
    

@dataclass
class RequestMissingFileKeysResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    missing_keys_response: Optional[shared.MissingKeysResponse] = field(default=None)
    status_code: int = field(default=None)
    
