from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetObjectPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'Path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectHeaders:
    range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Range' }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetObjectRequest:
    path_params: GetObjectPathParams = field(default=None)
    headers: GetObjectHeaders = field(default=None)
    

@dataclass
class GetObjectResponse:
    container_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_object_response: Optional[shared.GetObjectResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    object_not_found_exception: Optional[Any] = field(default=None)
    requested_range_not_satisfiable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
