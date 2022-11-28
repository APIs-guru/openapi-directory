from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestUserFileKeyPathParams:
    file_id: int = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserFileKeyQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestUserFileKeyHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserFileKeyRequest:
    headers: RequestUserFileKeyHeaders = field()
    path_params: RequestUserFileKeyPathParams = field()
    query_params: RequestUserFileKeyQueryParams = field()
    

@dataclass
class RequestUserFileKeyResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    file_key: Optional[shared.FileKey] = field(default=None)
    
